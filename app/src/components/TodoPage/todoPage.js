import React from 'react';

import styles from './todoPage.scss';

import Header from 'components/Header/';
import TodosList from './todoList';
import TasksList from './tasksList';


const TodoPage = (props) => (
  <section>
    <Header title="Tasks"></Header>
    <div className={styles.content}>
      <div className={styles.todos}>
        <TodosList {...props}/>
      </div>
      <div className={styles.tasks}>
        {/* <AddTask /> */}
        <TasksList {...props}/>
      </div>
    </div>
  </section>
)

export default TodoPage;