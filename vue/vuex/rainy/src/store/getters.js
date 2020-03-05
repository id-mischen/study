
export default {
    sham_goods: (state) => {
        state.goods.forEach((item)=>{
            item.sale += Math.round(Math.random() * 100) //虚假销量
        });
        return state.goods
    },
}