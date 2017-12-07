const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return Task
      .create({
        title: req.body.title,
        content: req.body.content,
        todoId: req.params.todoId,
        due: req.body.due
      })
      .then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Task
      .findAll()
      .then(task => res.status(200).send(task))
      .catch(error => res.status(400).send(error))
  },

  update(req, res) {
    return Task
      .find({
        where: {
          id: req.params.taskId,
          todoId: req.params.todoId
        }
      })
      .then(task => {
        if(!task) {
          return res.status(404).send({message: 'Task not found.'})
        }
        return task
          //Updates whatever fields are sent within the request, leaves others untouched
          .update(req.body, { fields: Object.keys(req.body)})
          .then(task => res.status(200).send(task))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Task
      .find({
        where: {
          id: req.params.taskId,
          todoId: req.params.todoId
        }
      })
      .then(task => {
        if(!task) {
          return res.status(404).send({message: 'Task not found.'})
        }
        return task
          .destroy()
          .then(() => res.status(200).send({message: 'success'}))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error));
  }
};