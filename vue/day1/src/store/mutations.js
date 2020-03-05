
const mutations = {
    addCountMutation(state,data){
        state.shop.map((item,index)=>{
            if(data === item.id){
                item.count++ ;
                return
            }
        });
        console.log("mutations被触发");
    },
    delCountMutation(state){
        console.log("mutations被触发");
    }
};
export default mutations