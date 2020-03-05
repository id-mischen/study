import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex) ;

let state  = {
    goods: [{
        id: '1',
        name: '袜子',
        price: 10 ,
        sale: 0,
        count: 0,
    },{
        id: '2',
        name: '衬衣',
        price: 50,
        sale: 0,
        count: 0,
    },{
        id: '3',
        name: '裤子',
        price: 100,
        sale: 0,
        count: 0,
    }]
};
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})