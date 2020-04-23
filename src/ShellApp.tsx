import React, { Component } from "react";

class ShellApp extends Component {
  mkdir = () => {
    fetch("/runShell", {
      method: "post",
    }).then((data) => {
      console.log(data);
    });
  };
  forinTest = () => {
    let test: any = {
      // a: "1",
      b: "1",
      c: "1",
      d: "1",
    };
    test.a1 = 3;
    test.a = 3;

    for (const varr in test) {
      console.log("ShellApp -> forinTest -> varr", varr);
      // if (test.hasOwnProperty(varr)) {
      //   const element = test[varr];

      // }
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.forinTest}>for in测试</button>

        {/* <button onClick={this.mkdir}>测试shell </button> */}
      </div>
    );
  }
}

export default ShellApp;
