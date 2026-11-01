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

function renderedLinks(relative) {
  const Page = load(relative).default;
  return [...renderToStaticMarkup(React.createElement(Page)).matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
}

test('Hubs e mapa do site publicam todas as páginas dinâmicas existentes', () => {
  const hubs = [
    ['src/app/servicos/page.tsx', '/servicos/', services.map((service) => service.slug)],
    ['src/app/areas-atendidas/page.tsx', '/areas/', gu.map((area) => area.slug)],
    ['src/app/sao-paulo/page.tsx', '/sao-paulo/', sp.map((area) => area.slug)],
    ['src/app/mapa-do-site/page.tsx', '/servicos/', services.map((service) => service.slug)],
    ['src/app/mapa-do-site/page.tsx', '/areas/', gu.map((area) => area.slug)],
    ['src/app/mapa-do-site/page.tsx', '/sao-paulo/', sp.map((area) => area.slug)],
  ];

  for (const [page, prefix, slugs] of hubs) {
    const linkedSlugs = renderedLinks(page)
      .filter((href) => href.startsWith(prefix))
      .map((href) => href.slice(prefix.length))
      .sort();
    assert.deepEqual(linkedSlugs, [...slugs].sort(), `${page} deve listar todas as rotas em ${prefix}`);
  }
});

test('Hubs oferecem cotação contextual e o hub São Paulo aponta para serviços', () => {
  for (const page of [
    'src/app/servicos/page.tsx',
    'src/app/areas-atendidas/page.tsx',
    'src/app/sao-paulo/page.tsx',
  ]) {
    assert.ok(renderedLinks(page).includes('/precos'), `${page} sem link para cotação`);
  }
  assert.ok(renderedLinks('src/app/sao-paulo/page.tsx').includes('/servicos'));
});

test('Páginas dinâmicas são indexáveis e entram integralmente no sitemap', async () => {
  const sitemap = load('src/app/sitemap.ts').default();
  const urls = sitemap.map((entry) => new URL(entry.url).pathname);
  for (const excluded of ['/termos-uso', '/politica-privacidade', '/motoboy-24-horas']) assert.ok(!urls.includes(excluded), excluded);
  assert.equal(new Set(urls).size, urls.length);

  for (const [prefix, records, page] of [
    ['/servicos/', services, 'src/app/servicos/[slug]/page.tsx'],
    ['/areas/', gu, 'src/app/areas/[slug]/page.tsx'],
    ['/sao-paulo/', sp, 'src/app/sao-paulo/[slug]/page.tsx'],
  ]) {
    const sitemapSlugs = urls.filter((url) => url.startsWith(prefix)).map((url) => url.slice(prefix.length)).sort();
    assert.deepEqual(sitemapSlugs, records.map((record) => record.slug).sort(), `Sitemap de ${prefix}`);

    const { generateMetadata } = load(page);
    for (const record of records) {
      const metadata = await generateMetadata({ params: Promise.resolve({ slug: record.slug }) });
      assert.equal(metadata.robots?.index, true, `Metadata de ${prefix}${record.slug}`);
    }
  }
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
    assert.match(html, /<form\b/);
    assert.equal((html.match(/required=""/g) || []).length, 2);
    assert.match(html, /<button[^>]*type="submit"/);
    const buttons = [...html.matchAll(/<button\b([^>]*)>/g)];
    const categoryButtons = buttons.filter((match) => match[1].includes('aria-pressed'));
    assert.equal(categoryButtons.length, 4);
    assert.equal(categoryButtons.filter((match) => match[1].includes('aria-pressed="true"')).length, 1);
    assert.equal(categoryButtons.filter((match) => match[1].includes('aria-pressed="false"')).length, 3);
    assert.match(html, /name="categoria" value="docs"/);
  });
}
