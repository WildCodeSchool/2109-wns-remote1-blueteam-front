import Dashboard from '../components/dashboard/Dashboard';
import MyFirstPage from '../components/firstpage/MyFirstPage';
import IRoute from '../interfaces/routes';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/myfirstpage',
    name: 'My First Page',
    component: MyFirstPage,
    exact: true,
  },
];

export default routes;
