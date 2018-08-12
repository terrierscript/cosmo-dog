import styled from "styled-components";
import React from "react";

// import wrapDisplayName from "recompose/wrapDisplayName";

const Circle = styled.div`
  border-radius: 50px;
  min-width: 50px;
  height: 50px;
  display: flex;
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

const OrangeCircle = styled(Circle)`
  background: linear-gradient(
    0deg,
    rgba(220, 121, 0, 1) 0%,
    rgba(255, 171, 0, 1) 100%
  );
`;
const GrayCircle = styled(Circle)`
  background: linear-gradient(
    0deg,
    rgba(130, 130, 130, 1) 0%,
    rgba(176, 176, 176, 1) 65%
  );
`;

const Center = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`;

export const OrangeButton: React.SFC<any> = ({ children }) => {
  return (
    <OrangeCircle>
      <Center>{children}</Center>
    </OrangeCircle>
  );
};
export const GrayButton: React.SFC<any> = ({ children }) => {
  return (
    <GrayCircle>
      <Center>{children}</Center>
    </GrayCircle>
  );
};

export const ButtonSamples = () => {
  return (
    <>
      <OrangeButton>1</OrangeButton>
      <GrayButton>1</GrayButton>
    </>
  );
};
