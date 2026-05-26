import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
      second: 100,
    };
  }

  handleFirst = () => {
    console.log(this.state.first);
    this.setState({ first: this.state.first + 1 });
  };

  handleSecond = () => {
    this.setState({ second: this.state.second + 1 });
  };

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.first !== this.state.first) {
      console.log("component did update");
    }
  }
  render() {
    return (
      <>
        <h2>Class Component</h2>
        <h3>First: {this.state.first}</h3>{" "}
        <button onClick={this.handleFirst}>Add First</button>
        <h3>Second: {this.state.second}</h3>
        <button onClick={this.handleSecond}>Add Second</button>
      </>
    );
  }
}

export default ClassComponent;
