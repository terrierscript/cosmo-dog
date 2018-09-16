import React from "react";
import styled from "styled-components";
import { Area } from "daily-ui/04_calculator/Calculator";

const template = `
  "line7	line7	line7	line7	.	line1	line1	line1"
  "line8	kana	kana	line6	.	line2	photo	line3"
  "line8	kana	kana	line6	.	line2	photo	line3"
  "line8	name	name	line6	.	line2	photo	line3"
  "line8	name	name	line6	.	line4	line4	line4"
  "line8	name	name	line6	.	.	.	."
  "line8	birthday	gender	line5	line5	line5	line5	line5"
  "line8	zipcode	zipcode	zipcode	zipcode	zipcode	zipcode	line10"
  "line8	place	place	place	place	place	place	line10"
  "line9	line9	line9	line9	line9	line9	line9	line9"
`;
const Grid = styled.div`
  display: grid;
  grid-template: ${template};
`;

const Line = styled.div`
  background: black;
`;

const Lines = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        const num = i + 1;
        const area = `line-${num}`;
        return (
          <Area area={area} key={area}>
            <Line />
          </Area>
        );
      })}
    </>
  );
};

export const Address = () => {
  return (
    <Grid>
      <Lines />
    </Grid>
  );
};
