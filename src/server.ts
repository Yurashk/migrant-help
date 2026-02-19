import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();

  // Serve static files from /browser
  server.use(express.static(browserDistFolder, {
    maxAge: '1y',
    index: false
  }));

  // All regular routes use the Angular engine
  // Note: In Angular 20+, the SSR is handled differently
  // The build process creates the necessary server files
  server.get('*', (req, res) => {
    res.sendFile(resolve(browserDistFolder, 'index.html'));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
