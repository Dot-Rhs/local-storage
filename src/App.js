import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    const counter = JSON.parse(localStorage.getItem("counter")) || 0; //without JSON.parse, num returns as a string
    //you could also set it in state above "counter: JSON.parse(loc... etc"
    this.setState(() => ({ counter }));
  }

  increment = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  save = () => {
    localStorage.setItem("counter", this.state.counter);
  };

  reset = () => {
    localStorage.clear(); // localStorage.removeItem("counter")
    this.setState(state => ({ counter: (state.counter = 0) }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <div>{counter}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.save}>save</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
