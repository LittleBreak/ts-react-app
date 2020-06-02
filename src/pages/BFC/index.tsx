import React, { Component } from "react";
import "./index.css";

interface IFn {
  name: string;
}
function bubbleSort(arr: Array<number>): Array<number> {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        var temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

class BFC extends Component {
  state = {
    nums: [1, 6, 9, 3, 2],
  };
  componentDidMount() {
    let Fn = (function test(this: IFn) {
      this.name = "name str";
    } as any) as { new (): IFn };
    Fn.prototype.a = 3;
    let fn = new Fn();
    console.log("BFC -> test -> fn", fn);
  }
  onSort = () => {
    this.setState({
      nums: bubbleSort(this.state.nums),
    });
  };
  render() {
    return (
      <div>
        <div className="box">
          <div className="float">I am a floated box!</div>
          <p>I am content inside the container.</p>
        </div>
        <div className="wrap">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default BFC;
