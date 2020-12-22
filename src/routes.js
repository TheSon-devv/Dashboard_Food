// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import CustomerList from "views/TableList/Customer/CustomerList.js";
import FoodsList from "views/TableList/Food/FoodsList.js";
import OrderList from "views/TableList/Order/OrderList.js";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/khachhang",
    name: "Quản lý khách hàng",
    icon: "content_paste",
    component: CustomerList,
    layout: "/admin"
  },
  {
    path: "/monan",
    name: "Quản lý món ăn",
    icon: "content_paste",
    component: FoodsList,
    layout: "/admin"
  },
  {
    path: "/datban",
    name: "Quản lý đặt bàn",
    icon: "content_paste",
    component: OrderList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
