

export  default {
    /**
     * 请求购物车数据且初始化
     * */
    initGoodsMutation(state){
        setTimeout(()=>{
            let goods = [
                {
                    id: 1,
                    name: '苹果',
                    price: 8,
                    count: 0
                },{
                    id: 2,
                    name: '香蕉',
                    price: 10,
                    count: 0
                }
            ] ;
            state.goods = goods ;
        },1000)
    },
    /**
     * 改变数量
     * @data 只能为一个参数 { type, id } 0减少 1添加
     * */
    changeCountMutation(state, data){
           let goods = state.goods ;
           for(let i = 0, len = goods.length; i < len; i++){
               if(goods[i].id === data.id){
                   goods[i].count = data.type ? goods[i].count+1 : goods[i].count-1;
               }
           }
    }
}