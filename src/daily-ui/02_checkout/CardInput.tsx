import { ReactNode } from "react";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
  /* line-height: em; */
  padding: 0.5em;
  font-size: 1.2em;
`;

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

export class CardInput extends React.Component<
  { number: string; children: (string) => ReactNode },
  { sanitized: string }
> {
  state = { sanitized: "" };
  sanitizeNumber(number) {
    const num = chunk(number.split(""), 4)
      .map(item => item.join(""))
      .join("-");
    console.log(num);
    this.setState({ sanitized: num });
  }
  handleChange = e => {
    this.sanitizeNumber(e.target.value);
  };
  componentDidMount() {
    this.sanitizeNumber(this.props.number);
  }
  render() {
    const { number } = this.props;
    return (
      <div>
        <Input type="tel" defaultValue={number} onChange={this.handleChange} />
        {this.state.sanitized}
      </div>
    );
  }
}
