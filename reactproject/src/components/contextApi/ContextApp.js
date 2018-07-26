import React, {Component } from 'react';

import "./context.css";
import NumberContext from './context';

const Counter =(props)=>{
    return(
        <NumberContext.Consumer>
            {val => <h1>{val} : The Count</h1>}
            </NumberContext.Consumer>
    );
}

export default class ContextApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            number:0
        };

        this.onDecHandler = this.onDecHandler.bind(this);
        this.onIncHandler = this.onIncHandler.bind(this);
    }

    onDecHandler(){
        this.setState({
            number:this.state.number -1
        });
    }
    onIncHandler(){
        this.setState({
            number:this.state.number +1
        });
    }
    render(){
        return(
            <div>
                <h1 className="App-title">react Context Api 16.3.1 </h1>
           
            <NumberContext.Provider value ={this.state.number}>
            <Counter />
            </NumberContext.Provider>
            <button onClick ={this.onIncHandler} className="btn">
            Inc
            </button>
            <button onClick ={this.onDecHandler} className="btn">
            Dec
            </button>

             </div> 
        )
    }
}