import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';

// JSX allows to use javascript expressions with curly braces anywhere.
// it is  a templating language that comes with the full power of Javascript

// statefull component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Manny',
    }
  }
  
  componentDidMount(){
    console.log('Component just mounted');
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.name}</h2>
        </div>
        <Intro name={this.state.name}/>
      </div>
    );
  }
}

export default App;
