import React from "react";
// import Select from "react-select";
import Select from "./SelectPinYin";
import pinyin from "pinyin";
import { Select as AntSelect } from "antd";
import "antd/dist/antd.css";

const Option = AntSelect.Option;

const options = [
  { value: "chocolate", label: "移动提交433001" },
  { value: "strawberry", label: "移动提交433002" },
  { value: "vanilla", label: "移动提交999" },
];

export default class Se extends React.Component {
  state = {
    selectedOption: null,
    options: [],
  };
  componentDidMount() {
    let op = [];
    this.setState({
      options: op.map((option, index) => {
        return {
          ...option,
          label: option.label + index,
          pinyin: pinyin(option.label, {
            style: pinyin.STYLE_NORMAL,
          })
            .join("")
            .toLowerCase(),
          py: pinyin(option.label, {
            style: pinyin.STYLE_FIRST_LETTER,
          })
            .join("")
            .toLowerCase(),
        };
      }),
    });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  getOption = () => {
    return this.state.options.map((item) => {
      return (
        <Option
          value={item.value}
          data={item}
          key={item.value}
          label={item.stockCode}
        >
          {item.label}
        </Option>
      );
    });
  };
  filterOption = (filterValue, { data }) => {
    console.log("Se -> filterOption -> data", data);
    let valueText = String(data.value),
      labelText = String(data.label),
      pinyinText = String(data.pinyin),
      pyText = String(data.py);

    return (
      pinyinText.indexOf(filterValue.toLowerCase()) >= 0 ||
      pyText.indexOf(filterValue.toLowerCase()) >= 0 ||
      (this.props.matchProp !== "label" &&
        valueText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0) ||
      (this.props.matchProp !== "value" &&
        labelText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0)
    );
    // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.options}
        />

        <AntSelect
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          // optionLabelProp="label"
          // onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          // filterOption={true}
          filterOption={this.filterOption}
        >
          {this.getOption()}
        </AntSelect>

        <AntSelect
          defaultValue="lucy"
          style={{ width: 120 }}
          // onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </AntSelect>
      </div>
    );
  }
}
