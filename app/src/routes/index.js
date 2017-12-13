import DashboardContainer from '../components/DashboardPage/';
import TodosContainer from '../components/TodoPage/';

const routes = [
  {
    path: '/',
    exact: true,
    component: DashboardContainer
  },
  {
    path: '/todos/:id?',
    component: TodosContainer
  }
]

export default routes;