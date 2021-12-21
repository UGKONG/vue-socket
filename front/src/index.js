// const Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';
import store from '@plugins/store';
import router from '@plugins/router';
import '@public/index.scss';

new Vue({
  store,
  router,
  render: (h) => h(App)

}).$mount('#root');