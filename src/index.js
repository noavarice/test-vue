import Vue from 'vue';
import BoostrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

import app from './components/app.vue';

Vue.use(BoostrapVue);

new Vue({
  el: 'body',
  render: h => h(app),
});