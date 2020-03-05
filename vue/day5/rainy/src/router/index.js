import Vue from 'vue'
import Router from 'vue-router'


const Cart = () => import('../pages/cart/cart.vue') ;
const Order = () => import('../pages/order/order.vue') ;

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path:'/',
            redirect: '/cart'
        },{
            path: '/cart',
            name: 'Cart',
            component: Cart
        },{
            path: '/order',
            name: 'Order',
            component: Order
        }
    ]
});

router.beforeEach((to, from, next)=>{
    next() ;
}) ;

export default router
