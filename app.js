const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const pizza = require("./controllers/pizza");

//For hot-reload on browser side
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, ".pages/index.html"));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());
//For hot-reload on browser side

app.get("", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/pages/test.html");
});

app.use("/get", pizza);

app.listen(port, () => {
  console.log(`HTMX-poc listening on port ${port}`);
});
