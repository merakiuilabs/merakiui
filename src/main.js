import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueClipboard);

Vue.use(VueAnalytics, {
  id: 'UA-161702225-3'
});

Vue.filter('toId', (componentName) => {
  return componentName.toLowerCase().replace(/ /g, '-')
});

new Vue({
  render: h => h(App),
}).$mount('#app');