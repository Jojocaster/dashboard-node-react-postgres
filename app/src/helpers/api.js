const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000
});

const ApiHelper = {
  getTodos() {
    return api.get('/todos');
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