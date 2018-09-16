import React from "react";
import styled from "styled-components";
import { Blocks } from "./Blocks";

const ColRowGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
`;

const Target = styled.div`
  grid-
`;
export const ColRowPos = () => {
  return (
    <ColRowGrid>
      <Blocks length={25} />
    </ColRowGrid>
  );
};
