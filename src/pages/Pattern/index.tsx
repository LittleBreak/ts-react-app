import React, { Component } from "react";
import Foo from "./singleton.js";
class Test {}

// let Singleton = (() => {
//   let instance;
//   return function () {
//     if (!instance) {
//       instance = new Test();
//       return instance;
//     } else {
//       return instance;
//     }
//   };
// })();
// let singleton1 = new Singleton();

class Pattern extends Component {
  componentDidMount() {
    let foo1 = new Foo("11");
    console.log("Pattern -> componentDidMount -> foo1", foo1);
    let foo2 = new Foo("22");
    console.log("Pattern -> componentDidMount -> foo2", foo2);
    console.log(foo1 === foo2);
  }
  render() {
    return <div>test</div>;
  }
}

export default Pattern;
