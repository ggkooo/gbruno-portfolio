// Injects the server-rendered page into dist/index.html after `vite build`.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const htmlPath = resolve('dist/index.html');
const ssrDir = resolve('dist-ssr');
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

const template = await readFile(htmlPath, 'utf-8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('prerender: root marker not found in dist/index.html');

// The page is already visible as static HTML, so the app bundle can wait until
// after the first paint instead of competing with it for bandwidth.
const entry = /<script type="module" crossorigin src="([^"]+)"><\/script>/;
const match = template.match(entry);
if (!match) throw new Error('prerender: entry script not found in dist/index.html');
const deferredEntry = `<script type="module">let started = false;
const start = () => { if (!started) { started = true; import(${JSON.stringify(match[1])}); } };
try { new PerformanceObserver((list, obs) => { obs.disconnect(); setTimeout(start); }).observe({ type: 'paint', buffered: true }); } catch { start(); }
setTimeout(start, 3000);</script>`;

// Picks the visitor's language before the first paint. Keep in sync with
// detectInitialLang() in src/i18n/index.tsx.
const pickLang = `<script>(function(){var l;try{l=localStorage.getItem('gbruno-lang')}catch(e){}if(l!=='pt'&&l!=='en')l=(navigator.language||'').toLowerCase().indexOf('pt')===0?'pt':'en';if(l==='en'){document.getElementById('root').innerHTML=document.getElementById('prerender-en').innerHTML;document.documentElement.lang='en'}})()</script>`;

const html = template
    .replace(entry, () => deferredEntry)
    .replace(marker, () => `<div id="root">${render('pt')}</div><template id="prerender-en">${render('en')}</template>${pickLang}`);
await writeFile(htmlPath, html);
await writeFile(`${htmlPath}.gz`, gzipSync(html, { level: 9 }));
await rm(ssrDir, { recursive: true, force: true });
console.log('prerender: dist/index.html written');
