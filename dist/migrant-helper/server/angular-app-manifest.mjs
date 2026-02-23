
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2839, hash: '79d77d6ff29089f19407eca5710b33037c0a5b1022bd70e8aab4683a8c80b960', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3379, hash: '511d62aa50d50e02b69b717c0d326ed69b50b9aad87167f3ef87cff58420c3dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
