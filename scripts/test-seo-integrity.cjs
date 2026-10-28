const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const ts = require('typescript');
const { createRequire } = require('node:module');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const localRequire = createRequire(filename);
  const requireModule = (name) => {
    if (!name.startsWith('@/')) return localRequire(name);
    const target = path.join(root, 'src', name.slice(2));
    const resolved = ['.ts', '.tsx'].map((ext) => target + ext).find(fs.existsSync);
    if (!resolved) throw new Error(`Módulo não encontrado: ${name}`);
    return load(resolved);
  };
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  }).outputText;
  new Function('require', 'module', 'exports', compiled)(requireModule, module, module.exports);
  return module.exports;
}

const gu = load('src/data/neighborhoods-gu.ts').neighborhoodsGu;
const sp = load('src/data/neighborhoods-sp.ts').neighborhoodsSp;
const services = load('src/data/services.ts').SERVICES;

for (const [name, records, key] of [['Guarulhos', gu, 'bairrosVizinhos'], ['São Paulo', sp, 'rotasRelacionadas']]) {
  test(`Todas as relações de ${name} apontam para regiões existentes`, () => {
    const slugs = new Set(records.map((r) => r.slug));
    const missing = records.flatMap((r) => r[key].filter((related) => !slugs.has(related.slug)).map((related) => `${r.slug} → ${related.slug}`));
    assert.deepEqual(missing, [], 'Relações com destino inexistente');
    for (const record of records) {
      assert.ok(record[key].length > 0, `Região sem relações: ${record.slug}`);
      assert.equal(new Set(record[key].map((r) => r.slug)).size, record[key].length);
    }
  });
}

test('Hub oferece um link navegável para cada serviço publicado', () => {
  const Hub = load('src/app/servicos/page.tsx').default;
  const html = renderToStaticMarkup(React.createElement(Hub));
  const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  const missing = services.filter((service) => !links.includes(`/servicos/${service.slug}`)).map((service) => service.slug);
  assert.deepEqual(missing, [], 'Serviços sem entrada no hub');
});

test('Sitemap exclui URLs com noindex intencional e preserva páginas de negócio', () => {
  const sitemap = load('src/app/sitemap.ts').default();
  const urls = sitemap.map((entry) => new URL(entry.url).pathname);
  for (const excluded of ['/termos-uso', '/politica-privacidade', '/motoboy-24-horas']) assert.ok(!urls.includes(excluded), excluded);
  for (const service of services) assert.ok(urls.includes(`/servicos/${service.slug}`));
  for (const area of gu) assert.ok(urls.includes(`/areas/${area.slug}`));
  for (const area of sp) assert.ok(urls.includes(`/sao-paulo/${area.slug}`));
  assert.equal(new Set(urls).size, urls.length);
});

for (const slug of ['termos-uso', 'politica-privacidade']) {
  test(`Canonical de ${slug} é próprio e mantém noindex/follow`, () => {
    const metadata = load(`src/app/(site)/${slug}/page.tsx`).metadata;
    assert.equal(metadata.alternates?.canonical, `https://www.moto11guarulhos.com.br/${slug}`);
    assert.equal(metadata.robots.index, false);
    assert.equal(metadata.robots.follow, true);
  });
}

for (const compact of [true, false]) {
  test(`Cotação ${compact ? 'compacta' : 'completa'} anuncia uma categoria selecionada`, () => {
    const { CotacaoForm } = load('src/components/site/CotacaoForm.tsx');
    const html = renderToStaticMarkup(React.createElement(CotacaoForm, { compact }));
    assert.match(html, /role="group"[^>]*aria-label="[^"]+"/);
    const buttons = [...html.matchAll(/<button\b([^>]*)>/g)];
    assert.equal(buttons.length, 4);
    assert.equal(buttons.filter((match) => match[1].includes('aria-pressed="true"')).length, 1);
    assert.equal(buttons.filter((match) => match[1].includes('aria-pressed="false"')).length, 3);
    const href = [...html.matchAll(/href="([^"]+)"/g)].find((match) => match[1].startsWith('https://wa.me/'))?.[1];
    assert.ok(href);
    assert.match(decodeURIComponent(href), /Documentos e Malotes/);
  });
}
