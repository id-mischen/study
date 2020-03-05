import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {MI_DEL,MI_AJAX,MI_ADD} from './store/actions';


class App extends Component {
  render() {
      // console.log(this.props);
      // console.log(MI_ADD());
    return (
      <div className="App">
          <p>{this.props.num}</p>
          <button onClick={this.props.add}>Add</button>
          <button onClick={this.props.del}>Del</button>
          <button onClick={this.props.asyncDdd}>asyncDel</button>

          {this.props.children}
      </div>
    );
  }
}



function mapStateToProps(state){
    // console.log("mapSate",state.indexRouter);
    return{
        productName:state.indexRouter.productName,
        price:state.indexRouter.price,
        num:state.indexRouter.num
    }
}

function mapDispatchProps(dispatch){
    // console.log(dispatch);
    return{
        add:()=>dispatch(MI_ADD()),
        del:()=>dispatch(MI_DEL()),
        asyncDdd:()=>{
            dispatch(MI_AJAX({url:'',cd(data){
                    console.log(data);
                }
            }))
            // setTimeout(function () {
            //     dispatch({type:"ADD"})
            // },3000);

            /*dispatch((a)=>{
                // console.log(a);  a--->dispatch
                // dispatch({type:"ADD"});

                setTimeout(()=>{
                    a({type:"ADD"});
                },3000)
            })*/
        }
    }
}
let connection = connect(mapStateToProps,mapDispatchProps);

export default connection(withRouter(App));




















