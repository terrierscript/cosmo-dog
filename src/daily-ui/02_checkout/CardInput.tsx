import { ReactNode } from "react";
import React from "react";
import styled from "styled-components";

import InputMask from "react-input-mask";
const Input = styled.input`
  /* line-height: em; */
  padding: 0.5em;
  font-size: 1.2em;
  color: hsl(0, 0%, 45%);
`;

export const CardInput = () => {
  return (
    <InputMask mask="9999 9999 9999 9999" maskChar={null}>
      {inputProps => <Input {...inputProps} />}
    </InputMask>
  );
};

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};
export class CardInputOld extends React.Component<
  { number: string; children: (string) => ReactNode },
  { sanitized: string }
> {
  state = { sanitized: "" };
  sanitizeNumber(number) {
    const num = chunk(number.split(""), 4)
      .map(item => item.join(""))
      .join(" ");
    console.log(num);
    this.setState({ sanitized: num });
  }
  handleChange = e => {
    const unchunked = e.target.value.split(" ").join("");
    this.sanitizeNumber(unchunked);
  };
  componentDidMount() {
    this.sanitizeNumber(this.props.number);
  }
  render() {
    const { sanitized } = this.state;
    return <Input type="tel" value={sanitized} onChange={this.handleChange} />;
  }
}
