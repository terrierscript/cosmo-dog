import React, { SFC, Children, ReactNode, createContext } from "react";

import InputMask from "react-input-mask";
import styled, { css } from "styled-components";
import { areaStyle, Area } from "components/grid/Grid";
const Input = styled.input`
  /* line-height: em; */
  padding: 0.5em;
  font-size: 1.2em;
  color: hsl(0, 0%, 45%);
`;

export const CardInput = (props) => {
  return (
    <InputMask mask="9999 9999 9999 9999" maskChar={null} value={props.number}>
      {(inputProps) => <Input {...inputProps} />}
    </InputMask>
  );
};

const template = `
  "desc desc    preview"
  "first last   preview"
  "number numbe previewr"
  
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
`;

const Title = styled.div``;
export const Checkout = ({ name }) => {
  return (
    <Grid>
      <Area area="desc">Please input your card</Area>
      <Area area="first">
        <label>
          <Title>First Name</Title>
          <Input />
        </label>
      </Area>
      <Area area="last">
        <label>
          <Title>Last Name</Title>
          <Input />
        </label>
      </Area>
      <Area area="number">
        <Title>Card Number</Title>
        <CardInput />
      </Area>
      <Area area="preview" />
    </Grid>
  );
};
