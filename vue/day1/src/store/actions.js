
const actions = {
    addCount({ commit },data){
        console.log(data);
        console.log("actions被触发");
        commit("addCountMutation",data);
    },
    delCount({ commit },data){
        console.log(data);
        console.log("actions被触发");
        commit("delCountMutation");
    }
};

export default actions