import React, { Component } from 'react';
import Single from './Single';

class Grid extends Component { 
  renderItems(){
    return this.props.notes.map(item => 
      <Single
          key={item.id}
          note={item}
          />
      );
  }
  render() {
    return (
      <div>
        {this.renderItems}
      </div>
    );
  }
}

export default Grid;
