import React from 'react';
import TextDisplay from '../TextDisplay';

export default class Child extends React.Component{
    constructor(props){
        super(props);
        //this.state={inputText:'Murthy'}
        
    };


    

    render(){
        return(
            
              
            <div>
                <div>Enter Name</div>
                <input type="text"
                    value = {this.props.inData}
                    onChange={this.props.change} />

                <TextDisplay text = {this.props.inData}/>
          
            </div>
        )
    }
}