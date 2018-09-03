import React from "react";
import styled from "styled-components";
import { Area } from "components/grid/Grid";

const template = `
  "a b"
  "a b"
`;
const Grid = styled.div`
  display: grid;
  grid-template: ${template};
`;
const AreaA = styled(Area)`
  background: red;
`;
const AreaB = styled(Area)`
  background: blue;
`;

export const Example = () => {
  return (
    <Grid>
      <AreaB area="b">B</AreaB>
      <AreaA area="a">A</AreaA>
    </Grid>
  );
};
