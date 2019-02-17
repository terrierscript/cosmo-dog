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
  grid-gap: 4px;
  grid-template-columns: repeat(4, 20px);
  grid-template-rows: repeat(4, 20px);
`;

const CssVars = styled.div`
  --g: #23b87b;
  --b: #29c5f0;
  --r: #e31558;
  --y: #ecb208;
  --rad-g1: 2em 2em 2em 0;
  --rad-b1: 2em 2em 0 2em;
  --rad-r1: 2em 0 2em 2em;
  --rad-y1: 0 2em 2em 2em;
`

const Box = styled.div<{
  color: string
  size: number
}>`
  width: 100%;
  height: 100%;
  background: ${ ({color}) => `var(--${color})` };
  grid-area: ${ ({color, size}) => `${color}${size}`};
  border-radius: ${({color, size}) => `var(--rad-${color}${size},2em)` };
`



const product = (a, b) => a
  .map(aa => b.map( bb => [aa, bb]))
  .reduce((c,n) => [...c, ...n], [])




export const SlackLogo = () => {
  return <CssVars>
    <Grid>{
      product(["b", "g", "r", "y"], [1, 2]).map( ([color, size]) => 
        <Box key={ `${color}${size}` } size={size} color={color} />
      )
    }
    </Grid>
  </CssVars>
}