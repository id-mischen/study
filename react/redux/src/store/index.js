import { createStore,combineReducers,applyMiddleware } from 'redux';
import IndexReducer from './Reducers/indexReducer';
import thunk from 'redux-thunk';

// let initState = {
//     productName:'奔驰',
//     price:1000000,
//     num:0
// }
// const reducer = function (state = initState,action) {
//     switch(action.type){
//         case "ADD":
//             ++initState.num;
//             return{
//                 ...initState
//             };
//         case "DEL":
//             --initState.num;
//             return{
//                 ...initState
//             };
//         default:
//             return state;
//     }
// }
let reducers = combineReducers({
   indexRouter:IndexReducer,
});

const store = createStore(reducers,applyMiddleware(thunk));
export default store;