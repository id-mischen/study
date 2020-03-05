import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Film from '../pages/film/film'
import Cinema from '../pages/cinema/cinema'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
        path:'/',
        redirect:'/film'
      },{
        path:'/film',
        name:'film',
        component: Film
      },{
        path:'/cinema',
        name:'cinema',
        component: Cinema
      }]
    }
  ]
})
