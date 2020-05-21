import React, { Component } from "react";

// function debounce(func: any, delay: number) {
//   let timeout: any;
//   return function (e: any) {
//     console.log("清除", timeout, e.target.value);
//     clearTimeout(timeout);
//     let context = this,
//       args = arguments;
//     console.log("新的", timeout, e.target.value);
//     timeout = setTimeout(function () {
//       console.log("----");
//       func.apply(context, args);
//     }, delay);
//   };
// }
// function throttle(fn, threshhold) {
//   var timeout;
//   var start = new Date();
//   var threshhold = threshhold || 160;
//   return function () {
//     var context = this,
//       args = arguments,
//       curr = new Date() - 0;

//     clearTimeout(timeout); //总是干掉事件回调
//     if (curr - start >= threshhold) {
//       console.log("now", curr, curr - start); //注意这里相减的结果，都差不多是160左右
//       fn.apply(context, args); //只执行一部分方法，这些方法是在某个时间段内执行一次
//       start = curr;
//     } else {
//       //让方法在脱离事件后也能执行一次
//       timeout = setTimeout(function () {
//         fn.apply(context, args);
//       }, threshhold);
//     }
//   };
// }
/**
 * 防抖和节流
 *
 * @class DebounceAndThrottle
 * @extends {Component}
 */
class DebounceAndThrottle extends Component {
  render() {
    return (
      <div>
        <input type="text" id="input" />
      </div>
    );
  }
}

export default DebounceAndThrottle;
