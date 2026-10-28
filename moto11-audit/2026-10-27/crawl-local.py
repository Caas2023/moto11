"""Audita HTML da build local, sem consultar serviços externos."""
import json
import re
import time
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

BASE = 'http://127.0.0.1:3100'
DOMAIN = 'www.moto11guarulhos.com.br'
OUT = Path(__file__).parent

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = []
        self.h1 = []
        self.links = []
        self.meta = {}
        self.canonical = None
        self.main = 0
        self.in_title = self.in_h1 = self.in_main = False
        self.skip = 0
        self.body = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.in_h1 = True
        if tag == 'main': self.main += 1; self.in_main = True
        if tag in ('script', 'style'): self.skip += 1
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'meta': self.meta[a.get('name', a.get('property', ''))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href')
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'h1': self.in_h1 = False
        if tag == 'main': self.in_main = False
        if tag in ('script', 'style'): self.skip = max(0, self.skip - 1)
    def handle_data(self, data):
        if self.skip: return
        if self.in_title: self.title.append(data)
        if self.in_h1: self.h1.append(data)
        if self.in_main: self.body.append(data)

def get(path):
    with urllib.request.urlopen(BASE + path, timeout=30) as r:
        return r.status, r.read().decode(), r.geturl()

_, xml, _ = get('/sitemap.xml')
paths = [urllib.parse.urlsplit(x.text).path for x in ET.fromstring(xml).iter() if x.tag.endswith('}loc')]
results = []
for path in paths:
    try:
        status, html, final = get(path)
        p = Page(); p.feed(html)
        links = []
        for link in p.links:
            u = urllib.parse.urlsplit(urllib.parse.urljoin('https://' + DOMAIN + path, link))
            if u.netloc == DOMAIN: links.append(u.path)
        text = ' '.join(' '.join(p.body).split())
        results.append(dict(path=path, status=status, final=final, title=''.join(p.title), h1=p.h1, canonical=p.canonical, robots=p.meta.get('robots'), description=p.meta.get('description'), og_image=p.meta.get('og:image'), main_count=p.main, main_words=len(re.findall(r'\w+', text)), links=sorted(set(links)), main_text=text))
    except Exception as e:
        results.append(dict(path=path, error=str(e)))
    time.sleep(0.05)
incoming = Counter(link for r in results for link in r.get('links', []) if link != r['path'])
summary = dict(scope='Build local, não produção; URLs do sitemap, sem descobrir URLs externas ao sitemap', pages=len(results), statuses=dict(Counter(r.get('status', 'error') for r in results)), noindex_in_sitemap=[r['path'] for r in results if 'noindex' in (r.get('robots') or '')], no_main=[r['path'] for r in results if r.get('main_count') == 0], no_incoming_in_sitemap_crawl=[r['path'] for r in results if r['path'] != '/' and incoming[r['path']] == 0], wrong_canonical=[r['path'] for r in results if r.get('canonical') != 'https://' + DOMAIN + r['path']])
(OUT / 'crawl.json').write_text(json.dumps(dict(summary=summary, pages=results), ensure_ascii=False, indent=2))
print(json.dumps(summary, ensure_ascii=False, indent=2))
