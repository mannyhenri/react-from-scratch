import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// JSX allows to use javascript expressions with curly braces anywhere.
// it is  a templating language that comes with the full power of Javascript

const user = {
  name: 'Manny',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {user.name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
