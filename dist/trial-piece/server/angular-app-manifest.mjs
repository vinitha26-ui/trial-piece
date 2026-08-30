
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/trial-piece/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/trial-piece"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 447, hash: 'd593980278a01a53222a9e0ddc682d9ceb4de510bb688771d3cb3b1e064b894f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '2bbf1361d9749c32b244ee6c115444d95b79cded66e091e6e1e8726871d659ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21590, hash: '59e2a5d366b6c0a2bcb754d8551c3dde86fbda1ca605f05010b97a6ec3846023', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
