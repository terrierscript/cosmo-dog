import React from "react";
import styled from "styled-components";

const Item = styled.div`
  color: #182438;
  padding: 1em;
  background: ${(props) => `${props.bgColor}`};
`;

export const Usage = () => {
  return <Item bgColor="#497acc">Hello styled</Item>;
};
