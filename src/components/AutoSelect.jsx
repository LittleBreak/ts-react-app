import React, { Component } from "react";
import "antd/dist/antd.css";
import { AutoComplete } from "antd";

class AutoSelect extends Component {
  render() {
    return (
      <div>
        <AutoComplete
          options={options}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
      </div>
    );
  }
}

export default AutoSelect;
