import React, { Component } from 'react';


export default class Form extends Component {
  handleChange(event) {
    this.props.handleChange(event);
  }
  handleSubmit(event) {
    this.props.handleSubmit(event);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Title: 
          <input 
            name="currentTitle"
            type="text" 
            value={this.props.currentTitle} 
            onChange={this.props.handleChange} />
        </label>
        <label>Details: 
          <textarea
            name="currentDetails"
            value={this.props.currentDetails} 
            onChange={this.props.handleChange} />
        </label>
        <div><input type="submit" value="Add note"/></div>
      </form>
    );
  }
}
