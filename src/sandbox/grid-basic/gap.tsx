import React from "react";
import styled from "styled-components";
import { Blocks } from "./Blocks";

const GapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
`;

export const Gap = () => {
  return (
    <GapGrid>
      <Blocks length={100} />
    </GapGrid>
  );
};
