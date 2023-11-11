const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes')
const port = 3000

//For hot-reload on browser side
const livereload = require('livereload')
const connectLiveReload = require('connect-livereload')
const liveReloadServer = livereload.createServer()
liveReloadServer.watch(path.join(__dirname, './index.html'))
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/')
  }, 100)
})

app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(port, () => {
  console.log(`HTMX-poc listening on port ${port}`)
})
