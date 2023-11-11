const express = require('express')
const router = express.Router()
const path = require('path')
const todos = require('./data')

router.post('/createTodo', (req, res) => {
  todo.push({ content: req.body.newTodo })
  res.send(`<div> ${req.body.newTodo}</div>`)
})

router.get('/todos', (req, res) => {
  res.send(`
    ${todos
      .map(
        (todo) => `
    <div>${todo.content}</div>`
      ) //Remove comma caused by template
      .join('')} 
  `)
})

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'))
})

module.exports = router
