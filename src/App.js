import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  isClicked = () => {
    this.setState({ counter: this.state.counter +1 })
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The Count is Currently { this.state.counter }
        </h1>
        <button
          onClick={ () => this.setState({ counter: this.state.counter +1 }) }
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default App;
