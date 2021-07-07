import Vue from 'vue';
import App from './App';
import store from './store/index';
import router from './routes/router';

import axiosApp from './utility/axios-app';
import axiosNLS from './utility/axios-nls';
import exchangeratesapi from './utility/axios-exchangeratesapi';
import {AuthHeader} from './utility/config';

window.axiosapp = axiosApp;
window.axiosnls = axiosNLS;
window.AuthHeader = AuthHeader;
window.exchangerates = exchangeratesapi;



router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

import {AppDebug} from './utility/config';
//dev Config
Vue.config.devtools = AppDebug !== 'false';



 new Vue({
  store, router,
  render: h => h(App),
}).$mount('#app');


