import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Goods from '../pages/goods/goods'
import Cart from '../pages/cart/cart'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Index',
          component: Index,
          children: [{path: 'goods', name: 'Goods',component: Goods},
            {path: 'cart',name:'Cart', component: Cart}]
      }
  ]
})
