import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import registerServiceWorker from './registerServiceWorker';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App)
});

router.onReady(() => {
  app.$mount('#app');
  if (process.env.NODE_ENV === 'production') {
    registerServiceWorker();
  }
});
