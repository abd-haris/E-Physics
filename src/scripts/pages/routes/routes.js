import DashboardPage from "../home/home";
import ListClass from "../list-class/list-class";
import MyClass from "../my-class/my-class";
import DetailMyClass from "../detail/detail-class";
import DetailModule from "../detail-course/detail-module";

export const routes = {
  "/": () => new DashboardPage(),
  "/list-class": () => new ListClass(),
  "/my-class/my": () => new MyClass(),
  "/my-class/:id/corridor": () => new DetailMyClass(),
  "/my-class/:id/module/:moduleId": () => new DetailModule(),
};
