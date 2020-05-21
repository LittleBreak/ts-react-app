import React, { Component } from "react";
import jsonp from "./common";

class Mod extends Component {
  componentDidMount() {}
  onClick = () => {
    jsonp({
      url: "http://39.101.201.237:8000/jsonp",
      params: { wd: "Iloveyou" },
      callback: "show",
    }).then((data) => {
      console.log("111", data);
    });

    // (window as any)
    //   .fetch("http://39.101.201.237:8000/cors", {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "text/plain",
    //     },
    //     method: "PUT",
    //   })
    //   .then((data: any) => {
    //     console.log(data);
    //   })
    //   .catch((e: any) => {
    //     console.log(e);
    //   });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick}>fetch</button>
      </div>
    );
  }
}

export default Mod;
