import styled from "styled-components";
import React from "react";
import { White } from "background/Background";

// import wrapDisplayName from "recompose/wrapDisplayName";
const Circle = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  background: linear-gradient(
    0deg,
    rgba(166, 111, 0, 1) 0%,
    rgba(255, 171, 0, 1) 100%
  );
  font-weight: bold;
  color: white;
  /* box-shadow: 1px 8px 29px 0px #666; */
  cursor: pointer;
  user-select: none;
  :active {
    transition: transform 0.2s, box-shadow 0.2s;
    transform: translateY(1px);
    /* box-shadow: 1px 8px 20px 0px #666; */
  }
`;

const Center = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`;

export const Button: React.SFC<any> = ({ children }) => {
  return (
    <Circle>
      <Center>{children}</Center>
    </Circle>
  );
};
