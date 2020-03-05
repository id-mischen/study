
let initState = {
    productName:'奔驰',
    price:1000000,
    num:0
};



let Index = function (state = initState,action) {
    switch(action.type){
        case "ADD":
            ++initState.num;
            return{
                ...initState
            };
        case "DEL":
            --initState.num;
            return{
                ...initState
            };
        default:
            return state;
    }
};

export default Index;