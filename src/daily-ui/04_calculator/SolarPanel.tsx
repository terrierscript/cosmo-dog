import styled from "styled-components";
import React from "react";
const Panel = styled.div`
  height: 40px;
  width: 32px;
  margin-left: 1px;
  background: rgb(78, 13, 13);
  background: linear-gradient(
    5deg,
    rgba(78, 13, 13, 1) 0%,
    rgba(145, 51, 51, 1) 47%,
    rgba(102, 10, 10, 1) 56%,
    rgba(186, 83, 83, 1) 59%,
    rgba(125, 41, 41, 1) 61%
  );
  display: inline-block;
`;
export const SolarPanel = () => {
  return (
    <>
      <Panel />
      <Panel />
      <Panel />
      <Panel />
    </>
  );
};
