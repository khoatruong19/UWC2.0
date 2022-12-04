import Home from './pages/Home';
import Login from './pages/Login';
import TaskAssignment from './pages/TaskAssignment';
import EmployeeList from './pages/EmployeeList';

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
  {
    path: 'employee-list',
    component: EmployeeList,
  }
];

export { routes };
