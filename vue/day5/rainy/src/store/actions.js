
export default {
    initGoods( { commit }, data){  //a =>Store b=>data
        commit('initGoodsMutation', data) ;
    },
    changeCount( { commit }, data){
        commit( 'changeCountMutation', data)
    }
}