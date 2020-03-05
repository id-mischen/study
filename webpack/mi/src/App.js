import React, { Component } from 'react';
import "./App.scss"
import imgSrc from './imgs/ggg.jpg'
class App extends Component {
    constructor(){
        super();
        this.state = {
            name: 'wpwpw'
        }
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.name}</h1>
                <img src={imgSrc} />
            </div>
        );
    }
}

export default App;

// export default {
//     name: 'wpwpw'
// }





