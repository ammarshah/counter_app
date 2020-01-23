import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
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
