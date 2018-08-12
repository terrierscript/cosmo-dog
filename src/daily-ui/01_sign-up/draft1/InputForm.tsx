import styled from "styled-components";
import React from "react";

const Grid = styled.div`
  display: flex;
  padding: 1em;
`;
const color = "rgb(195, 157, 18)";
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1.2em;
  grid-area: input;
  :focus {
    outline: none;
    border-bottom-color: ${color};
  }
`;
const Label = styled.span`
  grid-area: label;
  color: ${color};
  font-weigth: bold;
`;
const Row = styled.div`
  width: 100%;
`;
export const InputForm = () => {
  return (
    <Grid>
      <Row>
        <Label>Email</Label>
        <Input />
      </Row>
      <Row>
        <Label>Password</Label>
        <Input />
      </Row>
    </Grid>
  );
};
