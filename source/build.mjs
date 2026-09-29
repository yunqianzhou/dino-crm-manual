import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
// A preinstalled runtime may be supplied for offline local builds.
const esbuild = require(process.env.MANUAL_ESBUILD || 'esbuild');
const output = resolve(process.env.MANUAL_OUTPUT || resolve(here, '..'));
const nodePaths = process.env.MANUAL_NODE_MODULES ? [process.env.MANUAL_NODE_MODULES] : [];
const options = {bundle:true, minify:true, jsx:'automatic', nodePaths, absWorkingDir:here, define:{'process.env.NODE_ENV':'"production"'}};
const client = await esbuild.build({...options,entryPoints:['src/client.tsx'],write:false,format:'esm',platform:'browser',target:['es2020']});
const js = client.outputFiles[0].contents;
const css = (await esbuild.transform(await readFile(resolve(here,'src/styles.css'),'utf8'),{loader:'css',minify:true})).code;
const hash = createHash('sha256').update(js).update(css).digest('hex').slice(0,12);
const temp = await mkdtemp(resolve(tmpdir(),'dino-manual-render-'));
let html;
try {
  const ssr = resolve(temp,'render.cjs');
  await esbuild.build({...options,entryPoints:['src/render.tsx'],outfile:ssr,format:'cjs',platform:'node'});
  html = require(ssr).render();
} finally { await rm(temp,{recursive:true,force:true}); }
await mkdir(resolve(output,'assets'),{recursive:true});
await writeFile(resolve(output,`assets/manual-${hash}.js`),js);
await writeFile(resolve(output,`assets/manual-${hash}.css`),css);
await writeFile(resolve(output,'index.html'),`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dino CRM 操作手册｜Dino CRM Manual</title><meta name="description" content="中英双语、可搜索的 Dino CRM 在线操作手册，含营销中心配置、优惠码、落地页及常见问题。"><link rel="icon" href="./favicon.svg"><link rel="stylesheet" href="./assets/manual-${hash}.css"></head><body><div id="root">${html}</div><script type="module" src="./assets/manual-${hash}.js"></script></body></html>`);
console.log(`Built static manual: ${output}; asset version ${hash}`);
