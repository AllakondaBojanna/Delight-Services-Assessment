// LifecycleComponent.tsx
import React, { Component } from 'react';

interface State {
  message: string;
}

class LifecycleComponent extends Component<{}, State> {
  state: State = {
    message: "Hello, World!"
  };

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default LifecycleComponent;
