import React, { Component } from 'react';

class Counter extends Component {
  
  state = { 
    count: 0,
    tags: []
  }
  
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }   
  render() { 
      return (
        <div className="mb-2">
          <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary">Increment</button>
        </div>
      ); 
  }
  handleIncrement = () => {
    //console.log("Increment Clicked",this.state.count);
    this.setState({count: this.state.count + 1});
  }  
  renderTag(){
    if(this.state.tags.length === 0) return <p>There is no tags!</p>;

    return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount(){
      const { count } = this.state
      return count === 0 ? 'Zero' : count;
      }
}
 
export default Counter;