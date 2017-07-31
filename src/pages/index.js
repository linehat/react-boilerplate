import React from "react";
import { Button } from "components";
console.log("process:", process);

class Index extends React.Component {
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
    return (
      <div>
        button: <Button>click Me</Button>
        current:{this.state.current}
      </div>
    );
  }
}

export default Index;
