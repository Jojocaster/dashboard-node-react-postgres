import { connect } from 'react-redux';

import { fetchTasks, removeTask , toggleTask } from 'actions/tasks';
import { makeGetActiveSortedTasks } from 'selectors/';

import DashboardPage from './dashboardPage';

const mapStateToProps = (state, ownProps) => {
  const getActiveSortedTasks = makeGetActiveSortedTasks();
  return {
    tasks: getActiveSortedTasks(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks())
    },
    toggleTask: task => {
      dispatch(toggleTask(task))
    }
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

export default DashboardContainer;