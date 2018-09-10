import React from "react";
import styled from "styled-components";
import { Blocks } from "./Blocks";

const RowGrid1 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
`;

const RowGrid2 = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr 1fr 3fr 1fr);
`;

const RowGrid3 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  grid-auto-flow: column;
`;

export const Row1 = () => {
  return (
    <RowGrid1>
      <Blocks length={4} />
    </RowGrid1>
  );
};
export const Row2 = () => {
  return (
    <RowGrid2>
      <Blocks length={100} />
    </RowGrid2>
  );
};

export const Row3 = () => {
  return (
    <RowGrid3>
      <Blocks length={100} />
    </RowGrid3>
  );
};
