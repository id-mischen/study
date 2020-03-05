// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant  from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

/* eslint-disable no-new */
let V = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
//创建构造器
// let Profile = Vue.extend({
//   template:'<div> 你 好---> {{ name }}</div>',
//   data:function () {
//       return{
//         name: 'mischen'
//       }
//   }
// });
//
// new Profile().$mount('#app');




