import React from "react";
import "./styles/index.less";
// import Index from "./router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.getCurrentDateStr()
    };
  }

  componentDidMount() {
    this.setState({ current: this.getCurrentDateStr() });
  }

  getCurrentDateStr() {
    return new Date().toLocaleString();
  }

  render() {
    return <div />;
  }
}

export default App;
