import React, { Component } from "react";

class ShellApp extends Component {
  mkdir = () => {
    fetch("/runShell", {
      method: "post",
    }).then((data) => {
      console.log(data);
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.mkdir}>测试shell</button>
      </div>
    );
  }
}

export default ShellApp;
