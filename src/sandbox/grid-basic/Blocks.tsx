import React from "react";
import styled from "styled-components";

export const Block = styled.div`
  border: dotted blue 1px;
  text-align: center;
  vertical-align: middle;
  background: #fff;
  /* padding: ; */
`;

export const Blocks = ({ length }) => {
  return (
    <>
      {Array.from({ length }).map((_, i) => {
        return <Block key={i}>{i}</Block>;
      })}
    </>
  );
};
