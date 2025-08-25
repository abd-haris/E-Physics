import DashboardPage from '../home/home';
import ListClass from '../list-class/list-class';
import MyClass from '../my-class/my-class';
import DetailMyClass from '../detail/detail-class';
import DetailModule from '../detail-course/detail-module';
import LoginPage from '../auth/login/login';
import RegisterPage from '../auth/register/register';
import {
  checkUnauthenticatedRouteOnly,
  checkAuthenticatedRouteOnly,
} from '../auth/check-user-auth';

export const routes = {
  '/': () => checkAuthenticatedRouteOnly(new DashboardPage()),
  '/list-class': () => checkAuthenticatedRouteOnly(new ListClass()),
  '/my-class/my': () => checkAuthenticatedRouteOnly(new MyClass()),
  '/my-class/:id/corridor': () => checkAuthenticatedRouteOnly(new DetailMyClass()),
  '/my-class/:id/module/:moduleId': () => checkAuthenticatedRouteOnly(new DetailModule()),
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),
};
