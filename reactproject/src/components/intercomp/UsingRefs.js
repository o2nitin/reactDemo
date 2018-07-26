import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

export default class UsingRefs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    updateState(e){
        this.setState({
            data:e.target.value
        });
    }
    clearInput(e){
        this.setState({
            data:''
        });
        ReactDOM.findDOMNode(this.refs.myInput).focus();

        
    }
    render(){
        return (
            <div>
                <input value = {this.state.data}
                    onChange={this.updateState}
                    ref= "myInput" />

                    <button onClick = {this.clearInput}>Clear</button>
                    <h4>{this.state.data}</h4>
                    <FragmentApp />

                </div>
        );
    }
}

const FragmentApp = () => (
<Fragment>
    <p>I am paragraph 1</p>
    <p>I am paragraph 2</p>
</Fragment>
)
    
