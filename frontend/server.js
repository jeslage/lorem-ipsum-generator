const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  // use proxy in dev environment
  if (dev) {
    const proxy = require("http-proxy-middleware");

    const filter = (pathname, req) => {
      return pathname.match("^/(graphql|create-html)");
    };

    const apiProxy = proxy(filter, {
      target: "http://localhost:8080",
      changeOrigin: true
    });
    server.use(apiProxy);
  }

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
