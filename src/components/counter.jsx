import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // To solve the problem of `this` referencing to a different object we created a constructor earlier.
  // Another solution would be to convert the function into an arrow function and that will solve the problem.
  // Because arrow functions don't re-bind the `this` keyword, they are inherited.
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    // Object Destructuring
    // Using `value` property from `this.state` object and setting it to a const.
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
