const express = require('express');
const app = express();
const path = require('path');
const router = require('./back-end/routes');
const port = 3000;

//For hot-reload on browser side
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'front-end'));
console.log(path.join(__dirname, 'html'));
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(connectLiveReload());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('front-end'));

app.use('/back-end/routes', router);

app.listen(port, () => {
  console.log(`HTMX-poc listening on port ${port}`);
});
