import { Avater } from "./Avater";

import React from "react";
import styled from "../../node_modules/styled-components";
import { loremipsum } from "util/loremipsum";
import { Gradient } from "background/Background";

type Area = "avater" | "title" | "body" | "c" | "timestamp";
const Grid = styled.div`
  display: grid;
  grid-template:
    "avater . body" 1fr
    "avater . timestamp" 30px /
    0.2fr 0.1fr 1.7fr;
  background-color: white;
  padding: 1em;
  border-radius: 8px;
  color: black;
`;

const GridItem = styled.div<{
  area: Area;
}>`
  grid-area: ${({ area }) => area};
  align-self: center;
`;

const Timestamp = styled.div`
  font-size: 0.8em;
  color: #999;
`;
const Body = styled.div`
  font-size: 1em;
  line-height: 1.56em;
`;
export const CardMock = () => {
  return (
    <Gradient>
      <Grid>
        <GridItem area="avater">
          <Avater
            size={60}
            src="https://pbs.twimg.com/profile_images/966830018235064320/0p8V7WeV_400x400.jpg"
          />
        </GridItem>
        <GridItem area="body">
          <Body>{loremipsum}</Body>
        </GridItem>
        <GridItem area="timestamp">
          <Timestamp>2018-08-11 16:17</Timestamp>
        </GridItem>
      </Grid>
    </Gradient>
  );
};
