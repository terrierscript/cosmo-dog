import React from "react"
import styled from "styled-components";

const template = `
  ".. b1 g2 .. "
  "b2 b2 g2 g1"
  "r1 r2 y2 y2"
  ".. r2 y1"
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
`;



const blue = "blue"
const green = "green"
const red = "red"
const yellow = "yellow"

const Box = styled.div<{
  color: string
  size: number
}>`
  width: 100%;
  height: 100%;
  background: ${ ({color}) => var(${color}) } ;
  grid: ${ (props) => `${props.color}${props.size}`};
`
export const SlackLogo = () => {
  return <Grid>
    <Box size={1} color="blue"></Box>
    <Box grid="b2"></Box>
  </Grid>
}