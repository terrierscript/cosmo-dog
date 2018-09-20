import React from "react";
import styled from "styled-components";
import { Area } from "components/grid/Grid";

const template = `
  "area1 area2" 
`;

const Grid = styled.div`
  background: white;
  padding: 2em;
  /* box-sizing: border-box; */
  display: grid;
  grid-template: ${template};
  width: 800px;
`;

const width = "10px"
const AreaA = styled(Area)`
  border-top: ${width} solid black;
  border-left: ${width} solid black;
  padding: 10px;
`
const AreaB = styled(Area)`
  border-top: ${width} solid black;
  border-right: ${width} solid black;
  padding: 10px;

`

export const BadPattern = () => {
  return <Grid>
    <AreaA area={"area1"}>A</AreaA>
    <AreaB area={"area2"}>B</AreaB>
  </Grid>
}