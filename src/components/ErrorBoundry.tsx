import React, { Component } from 'react';

interface IErrorProps {
  children: React.ReactNode
}

interface IErrorState {
  hasError: boolean
}

class ErrorBoundry extends Component<IErrorProps, IErrorState>{
  constructor(props: IErrorProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
