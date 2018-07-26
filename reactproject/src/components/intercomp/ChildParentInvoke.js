import React from 'react';
import Child  from './Child';

export default class ChildParentInvoke extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:'Init data'
        }
        this.updateState = this.updateState.bind(this);
    };


    updateState(event){
        this.setState({data:event.target.value});
    }

    render(){
        return(
            <div>
                <h2>Parent Component</h2>
                data : {this.state.data}
                <Child change={this.updateState} inData={this.state.data} />

            </div>
        )
    }
}