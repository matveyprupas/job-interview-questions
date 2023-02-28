import React from "react";
import Button from "../zz_TestRunner/TestComponents/Button";
import "./Numbers.css";

interface CounterProps {
  message?: string;
}

interface CounterState {
  count: number;
}

class Numbers extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="numbers">
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{this.state.count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} action={this.decrement} />
            <Button title={"+"} action={this.increment} />
          </div>
        </div>
      </div>
    );
  }
}

export default Numbers;
