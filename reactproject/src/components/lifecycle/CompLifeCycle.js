import React from 'react';
//import Parent from './ErrorHandlling';

// Note : *Will* hooks are going to be removed in future versions
export default class CompLifeCycle extends React.Component {

   constructor(props) {
      super(props);		
      this.state = {
         data: 0,
         msg: 'Initial data...',
         newmsg:'Nodata'
      }
      this.setNewNumber = this.setNewNumber.bind(this)
      this.updateState = this.updateState.bind(this);     
   };
   setNewNumber(e) {
      this.setState({data: this.state.data + 1})
   }
   updateState(e) {
      this.setState({msg:e.target.value});
   }      
   render() {
      return (
         <div>          
             <button  onClick = {this.setNewNumber}>INCREMENT</button>                       
            
             <Content myNumber = {this.state.data} ></Content>
            <br/>
             <input type = "text" value = {this.state.msg} 
               onChange = {this.updateState} />
             <h3>{this.state.msg}</h3>               
         </div>
      );
   }
}

class Content extends React.Component{
    constructor(props){
        super(props);
        console.log(props.myNumber); //0
        console.log("1-constructor fired");
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentWillMount(){
        console.log("1.-> componentWillMount fired =>" + this.props.myNumber);
    }
    handleScroll(){
        console.log("handleScroll is executed ");
    }

    componentDidMount(){
        console.log("2. componentDidMount => reset data or reitit the data");
        console.log("2. componentDidMount => " + this.props.myNumber);

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(nextProps){
        console.log("3. componentWillReceiveProps => set default props");
        console.log("3. componentWillReceiveProps => " + nextProps.myNumber);
        this.setState({
            isPassed:nextProps.myNumber >= 60
        });

     
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate  Decide whether to re-render or not");
        console.log(nextState);
        console.log("4 .. rendering ");
        if(nextProps.myNumber >10){
            return true;
        }
        else{
            return false;
        }
    }

    componentWillUpdate(nP,nS){
        console.log("5. componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("7. componentDidUpdate Jquery  ");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount - relese the resource close the socket/unsubcribe event");

    }
    componentDidCatch(err){
        console.log("Some err " + err);
    }

    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
                </div>
        )
    }
}