import React from "react";
import styled from "styled-components";

const template = `
  "fkana lkana ....."
  "fname lname telep"
  ""
`;
const Grid = styled.div`
  display: grid;
  grid-template: ${template};
`;

export const Template = () => {
  return <Grid />;
};
