import React from "react"
import styled from "styled-components";

const template = `
  ".. b1 g2 .. "
  "b2 b2 g2 g1"
  "r1 r2 y2 y2"
  ".. r2 y1 .."
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas: ${template};
  grid-gap: 2px;
  grid-template-columns: repeat(4, 10px);
  grid-template-rows: repeat(4, 10px);
`;

const CssVars = styled.div`
  --b: #29c5f0;
  --g: #23b87b;
  --r: #e31558;
  --y: #ecb208;
`

const Box = styled.div<{
  color: string
  size: number
}>`
  width: 100%;
  height: 100%;
  background: ${ ({color}) => `var(--${color})` };
  grid-area: ${ ({color, size}) => `${color}${size}`};
  border-radius: ${({color, size}) => borderRadiusMap(color, size)};
`
const borderRadiusMap = (color, size) => {
  const r = "2em";
  if(size != 1){
    return r
  }
  switch(color){
    case "g":
      return `${r} ${r} ${r} 0`
    case "b":
      return `${r} ${r} 0 ${r}`
    case "r":
      return `${r} 0 ${r} ${r}`
    case "y":
      return `0 ${r} ${r} ${r}`
  }
}
export const SlackLogo = () => {
  return <CssVars>
    <Grid>{
      ["b", "g", "r", "y"].map( color => 
        [1, 2].map( size => <Box key={ `${color}${size}` } size={size} color={color} /> )
      )
    }
    </Grid>
  </CssVars>
}