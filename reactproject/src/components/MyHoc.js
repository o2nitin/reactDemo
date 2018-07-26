
import React from 'react';
const newData = {
  data: 'I am Data from Higher-Order Component'
 }

const MyHOC = (ComposedComponent) =>
 class extends React.Component {
   componentDidMount() {    
      this.setState({
         data: newData.data 
         // fetch("http://verizon.com/customerservice")
      });
   }
   render() {
      return <ComposedComponent {...this.props} {...this.state} />;
   }
};

class MyComponent extends React.Component {
   render() {
      return (
         <div>
           <h1>Testing HOC</h1>
            <h2>{this.props.data}</h2>
         </div>
      )
   }
}
export default MyHOC(MyComponent)