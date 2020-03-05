import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './store1';


ReactDOM.render(<Provider store={Store}><Router/></Provider>, document.getElementById('root'));


serviceWorker.unregister();
