import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 100%;
  height: 100%;
  border: dotted blue 1px;
`;
const Blocks = ({ length }) => {
  return (
    <>
      {Array.from({ length }).map((_, i) => {
        return <Block key={i} />;
      })}
    </>
  );
};

const RowGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;
const ColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Row = () => {
  return (
    <RowGrid>
      <Blocks length={20} />
    </RowGrid>
  );
};
export const Col = () => {
  return (
    <ColGrid>
      <Blocks length={20} />
    </ColGrid>
  );
};
