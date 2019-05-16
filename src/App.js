import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      errorMode: false
    }
  }

  onIncrement = () => {
    this.setState({
      counter: this.state.counter +1,
      errorMode: false
    })
  }

  onDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter -1 })
    } else {
      this.setState({ errorMode: true })
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The Count is Currently { this.state.counter }
        </h1>
        <button
          data-test="increment-button"
          onClick={ this.onIncrement }
        >
          Increment!
        </button>
        <button
          data-test="decrement-button"
          onClick={ this.onDecrement }
        >
          Decrement!
        </button>
        <div>
          {
            this.state.errorMode ?
              "ERROR: Cannot decrement below 0" : ""
          }
        </div>
      </div>
    );
  }
}

export default App;
