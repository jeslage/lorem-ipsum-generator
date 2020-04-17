import express from "express";
import next from "next";

const port = process.env.PORT || "3000";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/login", (req, res) => {
    return app.render(req, res, "/login", req.query);
  });

  server.get("/dashboard", (req, res) => {
    return app.render(req, res, "/dashboard", req.query);
  });

  server.get("/:shortId", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
