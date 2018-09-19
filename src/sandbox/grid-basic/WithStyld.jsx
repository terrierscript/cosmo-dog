// @ts-nocheck

import React from "react";
import styled from "styled-components";

const template = ["i", "ro", "ha", "ni"].map((area) => `[${area}]`).join(" 1fr ");
// template = [i] 1fr [ro] 1fr [ha] 1fr [ni]

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: ${template};
`;

const Area = styled.div`
  grid-column: ${(props) => props.area};
`;

export const MyComponent = () => {
  return (
    <GridLayout>
      <Area area="i">い</Area>
      <Area area="ro">ろ</Area>
      <Area area="ha">は</Area>
      <Area area="ni">に</Area>
    </GridLayout>
  );
};

