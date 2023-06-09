import { Component } from "react";
import ErrorIndicator from "./errorIndicator";
export default class ErrorBoundry extends Component {
    state = {
      hasError: false,
    };
    componentDidCatch() {
      this.setState({ hasError: true });
    }
    render() {
      if (this.state.hasError) {
        return <ErrorIndicator />;
      }
      return this.props.renderItem;
    }
  }