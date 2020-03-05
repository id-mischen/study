
let initState = {
    productName:"宝马",
    price:1000000,
    num:0
};

let reducer = function reducer(state = initState ,action) {
    switch (action.type) {
        case "ADD":
            initState.num++;
            return {...initState};
        case "DEL":
            initState.num--;
            return {...initState};
        case "AsyncADD":
            initState.num += 100;
            return {...initState};
        default:
            return state;

    }
};

export default reducer;