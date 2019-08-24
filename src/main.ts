import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import apollo from './apollo';
import './registerServiceWorker';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: apollo,
  render: (h) => h(App),
}).$mount('#app');
