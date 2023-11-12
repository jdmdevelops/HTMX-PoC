const express = require('express');
const router = express.Router();
const todos = require('./data');

const todo = ({ id, content, done, editing }) => {
  return `
      <div>
        ${
          editing
            ? `<span>${id}</span><input type="text" value="${content}" />
            
            <button> Done editing</button>  `
            : ` <div> ${id} ${content}  <input type="checkbox" />
            </input> <button >Click to edit</button> </div>`
        }
      </div>
      `;
};

//create
router.post('/', (req, res) => {
  const create = { id: todos.length + 1, content: req.body.todo, done: false };

  todos.push(create);
  res.send(todo(create));
});

//read
router.get('/', (req, res) => {
  res.send(`<div>${todos.map(todo).join('')}</div>`);
});

//update

//delete

module.exports = router;
