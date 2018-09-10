import React from "react";
import styled from "styled-components";
import { Blocks } from "./Blocks";

const ColGrid1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr;
`;

const ColGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr 1fr 4fr 1fr);
`;

const ColGrid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr 1fr 4fr 1fr);
`;

const ColGrid4 = styled.div`
  display: grid;
  grid-template-columns: 1fr [line-a] 4fr 1fr [line-b] 1fr 1fr;
`;

export const Col1 = () => {
  return (
    <ColGrid1>
      <Blocks length={100} />
    </ColGrid1>
  );
};
export const Col2 = () => {
  return (
    <ColGrid2>
      <Blocks length={100} />
    </ColGrid2>
  );
};
export const Col3 = () => {
  return (
    <ColGrid3>
      <Blocks length={100} />
    </ColGrid3>
  );
};

const Point = styled.div`
  grid-column: line-a / line-b;
  background: red;
`;

export const Col4 = () => {
  return (
    <ColGrid4>
      <Blocks length={5} />
      <Point>Point!</Point>
    </ColGrid4>
  );
};
