import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

// statefull component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Add course notes',
          details: 'Need to add more details to the course'
        },
        {
          id: 2,
          title: 'Use Unreal instead of Unity',
          details: 'After exploration of both systems to build game, use Unreal'
        },
        {
          id: 3,
          title: 'List of gifts',
          details: 'I want this, that, and a little bit of that too!'
        },
      ],
      name: 'Manny',
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
      </div>
    );
  }
}

export default App;
