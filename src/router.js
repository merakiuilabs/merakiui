import VueRouter from "vue-router";

const Alerts = () =>
  import("./components/categories/Alerts");

const Cards = () =>
  import("./components/categories/Cards");

const Forms = () =>
  import("./components/categories/Forms");


  export default new VueRouter({
    routes: [
      // { path: '/', redirect: '/alerts' },
      { path: "/alerts", component: Alerts, name: "Alerts" },
      { path: "/cards", component: Cards, name: "Cards" },
      { path: "/forms", component: Forms, name: "Forms" },
    ],
  });
