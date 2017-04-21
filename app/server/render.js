export default (renderString) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>React Starter X</title>
  </head>
  <body>
    <div id="root">${renderString}</div>
    <script src='build/client.js'></script>
  </body>
  </html>
`;
