import React from "react";
// import Select from "react-select";
import Select from "./SelectPinYin";
const options = [
  { value: "chocolate", label: "发广告433001" },
  { value: "strawberry", label: "士大夫433002" },
  { value: "vanilla", label: "蔡宗玎999" },
];

export default class Se extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
