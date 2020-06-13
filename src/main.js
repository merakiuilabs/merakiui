import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from "./router";
import VueClipboard from 'vue-clipboard2';
import VueAnalytics from 'vue-analytics';
import ViewComponent from './components/utilities/ViewComponent';

Vue.use(VueRouter);

Vue.component('view-component', ViewComponent);

Vue.config.productionTip = false;

Vue.use(VueClipboard);

Vue.use(VueAnalytics, { id: 'UA-167213766-1' });

new Vue({ render: h => h(App), router }).$mount('#app');

router.replace('/alerts');
