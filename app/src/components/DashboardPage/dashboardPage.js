import React from 'react';
import './dashboard.css';

import DashboardTasks from './dashboardTasks';

const DashboardPage = (props) => (
  <div className="dashboard">
    <section className="welcome">
      <h1>Welcome to your Dashboard, Joel !</h1>
      <p>Here's the list of your on-going tasks, feel free to manage them from here.</p>
    </section>
    <DashboardTasks {...props} />
  </div>
)

export default DashboardPage;