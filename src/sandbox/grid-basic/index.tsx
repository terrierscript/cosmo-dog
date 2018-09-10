import React from "react";
import styled from "styled-components";
import { Blocks } from "./Blocks";

const RowRepeatGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr 2fr 3fr 1fr);
`;
const ColGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr;
`;

const ColRepeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 2fr 3fr);
  /* , ); */
`;

const ColRowGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  grid-template-columns: 1fr 1fr 3fr 1fr;
`;

export const ColRepeat = () => {
  return (
    <ColRepeatGrid>
      <Blocks length={100} />
    </ColRepeatGrid>
  );
};
export const Col = () => {
  return (
    <ColGrid>
      <Blocks length={4} />
    </ColGrid>
  );
};
export const ColRow = () => {
  return (
    <ColRowGrid>
      <Blocks length={16} />
    </ColRowGrid>
  );
};
