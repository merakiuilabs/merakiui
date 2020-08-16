import VueRouter from "vue-router";

const Alerts = () => import("./components/categories/Alerts");
const Cards = () => import("./components/categories/Cards");
const Forms = () => import("./components/categories/Forms");
const Navbars = () => import("./components/categories/Navbars");
const Heros = () => import("./components/categories/Heros");
const Sections = () => import("./components/categories/Sections");
const SignInAndRegistration = () => import("./components/categories/Sign-inAndRegistration");
const Paginations = () => import("./components/categories/Paginations");
const Footers = () => import("./components/categories/Footers");

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: "/alerts" },
        { path: "/alerts", component: Alerts, name: "Alerts" },
        { path: "/cards", component: Cards, name: "Cards" },
        { path: "/forms", component: Forms, name: "Forms" },
        { path: "/navbars", component: Navbars, name: "Navbars" },
        { path: "/heros", component: Heros, name: "Heros" },
        { path: "/sections", component: Sections, name: "Sections" },
        { path: "/sign-in-and-registration", component: SignInAndRegistration, name: "Sign-in and Registration" },
        { path: "/paginations", component: Paginations, name: "Paginations" },
        { path: "/footers", component: Footers, name: "Footers" },
    ],
});
