// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import * as filters from './filters'; // 全局vue filter
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';


import './mock/index.js';
import buttonBox from './components/buttonBox'
Vue.component('my-button',buttonBox);
Vue.config.productionTip = false
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
