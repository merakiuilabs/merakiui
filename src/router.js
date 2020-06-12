import VueRouter from "vue-router";

const Alerts = () =>
  import("./components/categories/Alerts");


  export default new VueRouter({
    routes: [
      // { path: '/', redirect: '/alerts' },
      { path: "/alerts", component: Alerts, name: "Alerts" },
    ],
  });
