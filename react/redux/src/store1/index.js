import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import IndexReducer from './Reducers/indexReducer';

let reducers = combineReducers({
    indexReducer:IndexReducer,
});

export default createStore(reducers,applyMiddleware(thunk));