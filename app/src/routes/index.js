import DashboardContainer from '../components/DashboardPage/';
import TodoPage from '../components/TodoPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: DashboardContainer
  },
  {
    path: '/todos/:id?',
    component: TodoPage
  }
]

export default routes;