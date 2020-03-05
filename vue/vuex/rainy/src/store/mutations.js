
export default {
    /**
     * @Description: 改变商品购买数量
     * @data {id, num} 商品id, 变动的数量num
     * @return
    */
    changeCountMutation(state, data){
        for(let i = 0, len = state.goods.length; i < len; i++){
            if(state.goods[i].id === data.id){
                if(data.type === 'add'){
                    state.goods[i].count += data.num ;
                } else{
                    state.goods[i].count -= data.num ;
                }
                break
            }
        }
    },
    delCountMutation(state, data) {

    }
}