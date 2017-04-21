import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderContent) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>React Starter X</title>
  </head>
  <body>
    <div id="root">${renderToString(renderContent)}</div>
    <script src='build/client.js'></script>
  </body>
  </html>
`;
