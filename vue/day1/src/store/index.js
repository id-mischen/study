import Vue from 'vue'
import  Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);
const state = {
    shop:[{
        id: 0,
        price: 188,
        count:0
    },{
        id: 1,
        price: 99,
        count:0
    },{
        id: 2,
        price: 199,
        count:0
    }]
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});
export default  store