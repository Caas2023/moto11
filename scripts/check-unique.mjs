#!/usr/bin/env node
/**
 * check-unique.mjs — QA de unicidade de conteúdo (Moto11 Guarulhos).
 *
 * O que checa:
 *  1. Similaridade par-a-par entre arquivos `src/data/*.ts`.
 *     Avisa quando a unicidade de um arquivo fica < 60%
 *     (ou seja, similaridade Jaccard > 40% com outro arquivo).
 *  2. `title` / `description` duplicados (exatos ou quase-iguais, Jaccard > 0.85).
 *
 * Uso:
 *   node scripts/check-unique.mjs [--dir src/data] [--threshold 60] [--json]
 *
 * Saída: relatório no stdout. Exit 1 se houver problema, 0 se OK.
 * Sem dependências externas (só node:fs/path).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(here, "..");

const args = process.argv.slice(2);
function flag(name, fallback) {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  return args[i + 1] ?? fallback;
}
const dataDir = path.resolve(webRoot, flag("--dir", "src/data"));
const UNIQUENESS_THRESHOLD = Number(flag("--threshold", "60"));
const asJson = args.includes("--json");

const STOPWORDS = new Set(
  "de,da,do,das,dos,em,para,com,por,uma,um,que,como,nos,nas,no,na,se,ao,aos,e,ou,o,a,os,as,é,são,ser,mais,guarulhos,sp,moto11,motoboy".split(","),
);

function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/(^|\s)\/\/.*$/gm, "$1 ");
}

/** Extrai o texto "visível": literais de string + template literals. Fallback: texto todo. */
function extractVisibleText(src) {
  const clean = stripComments(src);
  const literals = [];
  const re = /(["'`])((?:\\\1|(?!\1)[\s\S])*?)\1/g;
  let m;
  while ((m = re.exec(clean)) !== null) {
    const body = m[2];
    if (body.trim().length >= 2) literals.push(body);
  }
  const joined = literals.join(" ");
  return joined.trim().length >= 50 ? joined : clean;
}

function tokenize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim().replace(/^-+|-+$/g, ""))
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}

function wordSet(text) {
  return new Set(tokenize(text));
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  return inter / (a.size + b.size - inter);
}

/** Extrai titles/descriptions: campos comuns de data + metadata. */
function extractMeta(src, file) {
  const out = [];
  const patterns = [
    { field: "title", re: /(?:title|name|h1)\s*:\s*["'`]([^"'`]{4,200}?)["'`]/gi },
    {
      field: "description",
      re: /(?:description|metaDescription|excerpt|meta_description)\s*:\s*["'`]([^"'`]{10,400}?)["'`]/gi,
    },
  ];
  for (const { field, re } of patterns) {
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(src)) !== null) {
      const value = m[1].trim();
      if (value.length > 0) out.push({ file, field, value });
    }
  }
  return out;
}

function norm(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------------------

if (!fs.existsSync(dataDir)) {
  console.log(`[check-unique] Diretório não encontrado: ${dataDir}`);
  console.log("[check-unique] Nada a checar (outros agentes ainda não geraram src/data). OK.");
  process.exit(0);
}

const files = fs
  .readdirSync(dataDir)
  .filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts"))
  .map((f) => path.join(dataDir, f))
  .filter((p) => fs.statSync(p).isFile());

if (files.length < 2) {
  console.log(`[check-unique] Apenas ${files.length} arquivo(s) em ${dataDir}. Mínimo 2 para comparar. OK.`);
  process.exit(0);
}

const docs = files.map((file) => {
  const src = fs.readFileSync(file, "utf8");
  return { file: path.basename(file), src, words: wordSet(extractVisibleText(src)) };
});

// Similaridade par-a-par
const pairs = [];
for (let i = 0; i < docs.length; i++) {
  for (let j = i + 1; j < docs.length; j++) {
    const sim = jaccard(docs[i].words, docs[j].words);
    pairs.push({ a: docs[i].file, b: docs[j].file, similarity: sim });
  }
}
pairs.sort((x, y) => y.similarity - x.similarity);

const maxSimByFile = new Map(docs.map((d) => [d.file, 0]));
for (const p of pairs) {
  maxSimByFile.set(p.a, Math.max(maxSimByFile.get(p.a), p.similarity));
  maxSimByFile.set(p.b, Math.max(maxSimByFile.get(p.b), p.similarity));
}

const lowUniqueness = [...maxSimByFile.entries()]
  .map(([file, maxSim]) => ({ file, uniqueness: (1 - maxSim) * 100, maxSim }))
  .filter((r) => r.uniqueness < UNIQUENESS_THRESHOLD)
  .sort((x, y) => x.uniqueness - y.uniqueness);

// Titles/descriptions duplicados
const metas = docs.flatMap((d) => extractMeta(d.src, d.file));
const dupProblems = [];
for (let i = 0; i < metas.length; i++) {
  for (let j = i + 1; j < metas.length; j++) {
    const A = metas[i];
    const B = metas[j];
    if (A.field !== B.field) continue;
    if (A.file === B.file && A.value === B.value) continue;
    const na = norm(A.value);
    const nb = norm(B.value);
    if (na === nb) {
      dupProblems.push({ type: "exact", field: A.field, a: A, b: B });
    } else {
      const sim = jaccard(wordSet(A.value), wordSet(B.value));
      if (sim > 0.85) dupProblems.push({ type: `near (${(sim * 100).toFixed(0)}%)`, field: A.field, a: A, b: B });
    }
  }
}

const hasProblems = lowUniqueness.length > 0 || dupProblems.length > 0;

if (asJson) {
  console.log(
    JSON.stringify(
      { dataDir, threshold: UNIQUENESS_THRESHOLD, files: docs.map((d) => d.file), pairs, lowUniqueness, dupProblems },
      null,
      2,
    ),
  );
} else {
  console.log("=== check-unique — Moto11 Guarulhos ===");
  console.log(`Arquivos: ${docs.length} em ${path.relative(webRoot, dataDir)} | meta unicidade >= ${UNIQUENESS_THRESHOLD}%`);
  console.log("");
  console.log("--- Top 10 pares mais similares ---");
  for (const p of pairs.slice(0, 10)) {
    console.log(`  ${(p.similarity * 100).toFixed(1)}% similar  ${p.a}  <->  ${p.b}`);
  }
  console.log("");
  if (lowUniqueness.length === 0) {
    console.log(`OK: todos os arquivos com unicidade >= ${UNIQUENESS_THRESHOLD}%.`);
  } else {
    console.log(`AVISO: ${lowUniqueness.length} arquivo(s) abaixo de ${UNIQUENESS_THRESHOLD}% de unicidade:`);
    for (const r of lowUniqueness) {
      console.log(`  ${r.uniqueness.toFixed(1)}% único  ${r.file}  (similaridade máx ${(r.maxSim * 100).toFixed(1)}%)`);
    }
  }
  console.log("");
  console.log(`--- titles/descriptions (${metas.length} extraídos) ---`);
  if (dupProblems.length === 0) {
    console.log("OK: nenhum title/description duplicado.");
  } else {
    console.log(`FALHA: ${dupProblems.length} duplicata(s):`);
    for (const d of dupProblems) {
      console.log(`  [${d.type}] ${d.field}: "${d.a.file}" <-> "${d.b.file}"`);
      console.log(`    "${d.a.value.slice(0, 120)}"`);
    }
  }
  console.log("");
  console.log(hasProblems ? "RESULTADO: FALHOU — ver itens acima." : "RESULTADO: OK.");
}

process.exit(hasProblems ? 1 : 0);
