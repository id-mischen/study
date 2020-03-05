import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import App1 from '../App1';
import List from '../pages/List';
import Cart from '../pages/Cart';

function Admin(){
    return(
        <BrowserRouter>
                <App1 >
                    <Switch>
                        <Route path="/list" component={List}/>
                        <Route path="/cart" component={Cart}/>
                        {/*<Redirect to="/list"></Redirect>*/}
                    </Switch>
                </App1>
        </BrowserRouter>
    )
}

export default Admin;