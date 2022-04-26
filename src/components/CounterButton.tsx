import React, { Component } from 'react';

interface IButtonProps {
  color?: string;
  count?: number;
}

interface IButtonState extends IButtonProps {
  count: number
}

class CounterButton extends Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps: IButtonProps, nextState: IButtonState) {
    return this.state.count !== nextState.count;
  }

  render() {
    console.log('counter');
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
