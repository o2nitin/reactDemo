import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {MyComponent} from './lazyload/LoadableOtherComponent'

class App extends Component {

  constructor(props){
    super(props);
    import('./Math').then( m =>{
      alert(m.add(16,34));
    });
  }
  render() {
    return (
      <div className="App">
      <MyComponent />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
