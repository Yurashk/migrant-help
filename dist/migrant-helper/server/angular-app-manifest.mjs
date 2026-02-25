
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2839, hash: '4cbd122e27f7c22288673be48250022928cd1c6c14d1e289c0d715689ce56f12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3379, hash: '4072b061ddd4ffd7d1f01247f0566e229ee7ce2337cd9ea7bc451def58a0bbf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
