'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Todo.associate = (model) => {
    Todo.hasMany(models.ToDoItem, {
      foreignKkey: 'todoId',
      as: 'todoItems'
    });
  };

  return Todo;
};