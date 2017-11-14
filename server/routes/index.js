const todosCtrl = require('../controllers').todos;
const todoItemCtrl = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }));

  //Todos
  app.post('/api/todo', todosCtrl.create);
  app.get('/api/todos', todosCtrl.list);
  app.get('/api/todos/:todoId', todosCtrl.retrieve);
  app.post('/api/todos/:todoId', todosCtrl.update);
  app.delete('/api/todos/:todoId', todosCtrl.destroy);

  //Tasks
  app.post('/api/todos/:todoId/items', todoItemCtrl.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemCtrl.update);
  app.delete('/api/todos/:todoId/items/:todoItemId', todoItemCtrl.destroy);

  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    })
  );
}