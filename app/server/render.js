export default (renderString) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>React Starter X</title>
    <link rel="stylesheet" href="build/app.css" />
  </head>
  <body>
    <div id="root">${renderString}</div>
    <script src='build/client.js'></script>
  </body>
  </html>
`;
