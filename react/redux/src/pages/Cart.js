import React,{ Component } from 'react';
import Store from '../store1';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            productName: Store.getState().indexReducer.productName,
            price:Store.getState().indexReducer.price,
            num:Store.getState().indexReducer.num,
            allMoney:Store.getState().indexReducer.price * Store.getState().indexReducer.num
        }
    }
    render(){
        return(
            <div className="cart">
                <p>商品名称：{this.state.productName}</p>
                <p>商品价格：{this.state.price}</p>
                <p>商品数量：{this.state.num}</p>
                <p>总计：{this.state.allMoney}</p>
            </div>
        )
    }

}

export default Cart;