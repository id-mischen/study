import  React,{ Component }from 'react';
import { withRouter } from 'react-router-dom';

class App1 extends Component{
    render(){
        return(
            <div className="app1Name">
                {this.props.children}
            </div>
        )
    }

}

export  default withRouter(App1);