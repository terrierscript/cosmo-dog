import React from "react";
import styled from "styled-components";
import icon from "./icon.jpg";
import { Area } from "components/grid/Grid";

const template = `
  "avater name  .     logo"
  "body   body  body  body"
  "time   .     .     ."
  "like   rt    .     ."
`;
const Grid = styled.div``;

const Avater = styled.img`
  border-radius: 50%;
  width: 60px;
`;
export const Twitter = () => {
  return (
    <Grid>
      <Area area={"avater"}>
        <Avater src={icon} />
      </Area>
    </Grid>
  );
};
