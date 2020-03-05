import  React,{ Component }from 'react';
import { withRouter } from 'react-router-dom';
import {connect }from 'react-redux';
import {MI_ADD,MI_DEL,MI_AJAX} from '../store1/actions';
import Store from '../store1'

class List extends Component{
    constructor(props,context){
        super(props,context);
    }
    componentDidMount() {
        console.log(Store.getState().indexReducer);
        console.log(Store.getState());
        console.log(this) ;
    }

    handleBuy(){
        this.props.history.push('/cart');
        // this.state.name = 'Srainy';
        // console.log(this.state.name);??
    }
        // this.forceUpdate();  不管用？
    render(){
        // console.log(this.props);
        return(
            <div className="list">
                {/*<p>商品名称：{this.state.productName}</p>*/}
                {/*<p>商品价格：{this.state.price}</p>*/}
                {/*<p>商品数量：{this.state.num}</p>*/}
                {/*<button onClick={ ()=>{Store.dispatch({type:'ADD'})} }>增加</button>-------------*/}
                {/*<button onClick={ ()=>{Store.dispatch({type:'DEL'})} }>减少</button>-------------*/}
                {/*<button onClick={this.handleBuy.bind(this)}>点击结账</button>*/}
                <p>商品名称：{this.props.productName}</p>
                <p>商品价格：{this.props.price}</p>
                <p>商品数量：{this.props.num}</p>
                <button onClick={ this.props.add }>增加</button>-------------
                <button onClick={ this.props.del }>减少</button>-------------
                <button onClick={this.handleBuy.bind(this)}>点击结账</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        productName:state.indexReducer.productName,
        price:state.indexReducer.price,
        num:state.indexReducer.num
    }
}
function mapDispatchToProps(dispatch){
    return{
        add:()=>{dispatch(MI_ADD())},

        del:()=>{dispatch(MI_DEL())}
    }
}
let connection = connect(mapStateToProps,mapDispatchToProps);


export default connection(withRouter(List));