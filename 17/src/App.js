import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

// statefull component
export default class App extends Component {
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
      currentTitle: '',
      currentDetails: '',
    }
  }
  
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(`Your note ${this.state.currentTitle} has been added!!!`);
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <Form currentTitle={this.state.currentTitle} 
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}/>
        <Grid notes={this.state.notes} />
      </div>
    );
  }
}
