import React from 'react';

import styles from './dashboard.scss';
import DashboardTasks from './dashboardTasks';

const DashboardPage = (props) => (
  <div className={styles.dashboard}>
    <section className={styles.welcome}>
      <h1>Welcome to your Dashboard, Joel !</h1>
      <p>Here's the list of your on-going tasks, feel free to manage them from here.</p>
    </section>
    <section className={styles.tasks}>
      <DashboardTasks {...props} />
    </section>
  </div>
)

export default DashboardPage;