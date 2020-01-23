import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    // Object Destructuring
    // Using `count` property from `this.state` object and setting it to a const.
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
