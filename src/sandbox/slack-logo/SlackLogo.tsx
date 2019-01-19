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
  --rad-g: 2em 2em 2em 0;
  --rad-b: 2em 2em 0 2em;
  --rad-r: 2em 0 2em 2em;
  --rad-y: 0 2em 2em 2em;
`

const Box = styled.div<{
  color: string
  size: number
}>`
  width: 100%;
  height: 100%;
  background: ${ ({color}) => `var(--${color})` };
  grid-area: ${ ({color, size}) => `${color}${size}`};
  border-radius: ${({color}) => `var(--rad-${color},2em)` };
`


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