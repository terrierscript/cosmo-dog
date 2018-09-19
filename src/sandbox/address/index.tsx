import React from "react";
import styled from "styled-components";
import { Area } from "daily-ui/04_calculator/Calculator";

const template = `
  "line7	line7	line7	line7	.	line1	line1	line1" 2px
  "line8	kana	kana	line6	.	line2	photo	line3" 1fr
  "line8	kana	kana	line6	.	line2	photo	line3" 1fr
  "line8	name	name	line6	.	line2	photo	line3" 1fr
  "line8	name	name	line6	.	line4	line4	line4" 2px
  "line8	name	name	line6	.	.	.	." 1fr
  "line8	birth	gender	line6	.	.	.	." 1fr
  "line8	birth	gender	line5	line5	line5	line5	line5" 2px
  "line8	zip	zip	zip	zip	zip	zip	line10" 1fr
  "line8	place	place	place	place	place	place	line10" 1fr
  "line9	line9	line9	line9	line9	line9	line9	line9" 2px
  / 2px 1fr 1fr 2px 1fr 2px 1fr 2px
`;
const Grid = styled.div`
  display: grid;
  grid-template: ${template};
`;

const Line = styled(Area)`
  background: black;
  width: 100%;
  height: 100%;
`;

const Lines = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        const num = i + 1;
        const area = `line${num}`;
        return (
          <Line area={area} key={area}></Line>
        );
      })}
    </>
  );
};

export const Address = () => {
  return (
    <Grid>
      <Lines />
      <Area area={"kana"}>山田</Area>
    </Grid>
  );
};
