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
    return api.post(`/todos/${task.todoId}/items`, {
      content: task.content
    });
  },

  toggleTask(task) {
    return api.put(`/todos/${task.todoId}/items/${task.id}`, {
      complete: !task.complete 
    });
  },

  createTodo(todo) {
    return api.post('/todo', {
      title: todo
    });
  },

  removeTask(task) {
    return api.delete(`/todos/${task.todoId}/items/${task.id}`);
  }
}

export default ApiHelper;