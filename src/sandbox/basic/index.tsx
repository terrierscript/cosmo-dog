// @ts-nocheck
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

const ItemWithBorder = styled<any>(Item)`
  color: #182438;
  background: ${(props) => `${props.bgColor}`};
  border: ${(props) => `10px solid ${props.borderColor}`};
`;

export const Usage2 = () => {
  return (
    <ItemWithBorder bgColor="#497acc" borderColor="red">
      Hello styled
    </ItemWithBorder>
  );
};
