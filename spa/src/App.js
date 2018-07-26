import React, { Component } from 'react';
import {Layout} from './components/Layout'

import Heading from './components/Heading'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
      <Heading/>
      <div>
           <Layout />
      </div>
      <Footer/>
      </div>
    );
  }
}
export default App;

