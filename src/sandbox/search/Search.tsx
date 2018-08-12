import styled from "styled-components";
import React from "react";
import { Gradient } from "components/background/Background";

export const SearchInput = styled.input`
  font-size: 1em;
  border-radius: 1em;
  outline: none;
  color: white;
  border: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em 1em;
`;

export const SearchInputMock = () => (
  <Gradient>
    <SearchInput />
  </Gradient>
);
