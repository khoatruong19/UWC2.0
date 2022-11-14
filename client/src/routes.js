import Home from './pages/Home';
import Login from './pages/Login';
import TaskAssignment from './pages/TaskAssignment';

const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
    auth: true,
  },
  {
    path: 'task-assignment',
    component: TaskAssignment,
  },
];

export { routes };
