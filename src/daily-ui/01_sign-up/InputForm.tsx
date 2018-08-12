import styled from "styled-components";
import React from "react";

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1.2em;
`;
const Label = styled.span``;
export const InputForm = () => {
  return (
    <div>
      <Label>Email</Label>
      <Input />
    </div>
  );
};
