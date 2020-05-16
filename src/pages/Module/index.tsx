import React, { Component } from "react";
// import * as comm from "./common";
let comm = require("./common.js");

class Mod extends Component {
  componentDidMount() {
    const s = new Set();

    [2, 3, 5, 4, 5, 2, 2].forEach((x) => s.add(x));
    s.add({ a: 1 });
    for (let i of s as any) {
      console.log(i);
    }
  }
  render() {
    return <div>test</div>;
  }
}

export default Mod;
