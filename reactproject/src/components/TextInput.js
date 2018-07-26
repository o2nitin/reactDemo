import React, {Component} from 'react';
import TextDisplay from './TextDisplay'

export default class TextINput extends Component{

    constructor(props){
        super(props)
        this.state={inputText:'Murthy'}
    }

    handleChange(event){
        this.setState({
            inputText:event.target.value
        })
    }
    render(){
        return(
            <div>
                <div>Enter Name</div>
                <input type="text"
                    value = {this.state.inputText}
                    onChange={this.handleChange.bind(this)} />

                <TextDisplay text = {this.state.inputText}/>
            </div>
        )
    }
}