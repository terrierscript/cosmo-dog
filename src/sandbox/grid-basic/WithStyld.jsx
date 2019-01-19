// @ts-nocheck

import React from "react";
import styled from "styled-components";

const template = ["i", "ro", "ha", "ni"]
  .map((area) => `[${area}]`)
  .join(" 1fr ");
// template = [i] 1fr [ro] 1fr [ha] 1fr [ni]

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: ${template};
`;

const Area = styled.div`
  grid-column: ${(props) => props.area};
`;

const Items = () => {
  const items = [
    { area: "i", content: "い" },
    { area: "ro", content: "ろ" },
    { area: "ha", content: "は" },
    { area: "ni", content: "に" }
  ];
  return (
    <>
      {items.map(({ area, content }) => {
        return <Area area={area}>{content}</Area>;
      })}
    </>
  );
};

export const MyComponent = () => {
  return (
    <GridLayout>
      <Items />
    </GridLayout>
  );
};
