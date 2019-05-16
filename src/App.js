import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The Count is Currently 0</h1>
        <button>Click Me!</button>
      </div>
    );
  }
}

export default App;
