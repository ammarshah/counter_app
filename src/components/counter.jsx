import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // Every JSX needs to be wrapped in some container e.g. <div></div>
      // but to add a div that does nothing, we can ignore it by using React.Fragment
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
