import styled from "styled-components";
import React from "react";
import { SearchInput } from "search/Search";
import { Button } from "./Button";
const template = `
"ii ii ii ii"
"ac pm pc di"
"k7 k8 k9 pw"
"k4 k5 k6 mi"
"k1 k2 k3 pl"
"zr zr do eq"/
60px 60px 60px 60px
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
  grid-gap: 1em;
`;

const Area = styled.div<{ area: string }>`
  grid-area: ${p => p.area};
`;
const BlackBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  );
  padding: 1em;
`;

export const Calcurator = () => {
  return (
    <BlackBackground>
      <Grid>
        <Area area="ii">
          <SearchInput />
        </Area>
        <Area area="k1">
          <Button>1</Button>
        </Area>
        <Area area="k2">
          <Button>2</Button>
        </Area>
        <Area area="k3">
          <Button>3</Button>
        </Area>
        <Area area="k4">
          <Button>4</Button>
        </Area>
        <Area area="k5">
          <Button>5</Button>
        </Area>
        <Area area="k6">
          <Button>6</Button>
        </Area>
        <Area area="k7">
          <Button>7</Button>
        </Area>
        <Area area="k8">
          <Button>8</Button>
        </Area>
        <Area area="k9">
          <Button>9</Button>
        </Area>
      </Grid>
    </BlackBackground>
  );
};
