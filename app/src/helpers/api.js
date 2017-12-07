const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000
});

const ApiHelper = {
  getTodos() {
    return api.get('/todos');
  },

  getTasks() {
    return api.get('/tasks/items');
  },

  addTask(task) {
    api.post('/tasks' + task.todoId + '/items', {
      content: task.content
    });
  },

  createTodo(todo) {
    return api.post('/todo', {
      title: todo
    });
  },

  removeTodo(id) {
    return api.delete(`/todos/${id}`);
  }
}

export default ApiHelper;