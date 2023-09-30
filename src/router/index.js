import { createRouter, createWebHistory } from "vue-router";
import EmployeePage from "../views/EmployeePage.vue";

const routes = [
  {
    path: "/",
    name: "EmployeePage",
    component: EmployeePage,
  },
  {
    path: "/edit-page/:id/:name",
    name: "EditEmployeePage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditPage.vue"),
  },
  {
    path: "/new-employee-page",
    name: "NewEmployee",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewEmployee.vue"),
  },
  {
    path: "/view-employee-page/:id/:name",
    name: "ViewEmployee",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewEmployee.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
