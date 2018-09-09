import styled from "styled-components";
import React from "react";
import { OrangeButton, GrayButton } from "./Button";
import { Gradient, FlexCenter } from "components/background/Background";

const template = `
  ". . so so"
  "ii ii ii ii"
  "ac pm pc di"
  "k7 k8 k9 pw"
  "k4 k5 k6 mi"
  "k1 k2 k3 pl"
  "zr zr do eq" / 60px 60px 60px 60px
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
  grid-gap: 1em;
`;

export const Area = styled.div<{ area: string }>`
  grid-area: ${(p) => p.area};
`;
const BlackBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  );
  padding: 1em;
  border-radius: 20px;
  width: fit-content;
  height: max-content;
`;

const Input = styled.input`
  font-size: 1.8em;
  border-radius: 0.8em;
  outline: none;
  color: white;
  border: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em 1em;
  width: 100%;
  box-sizing: border-box;
`;

const NumberButton = GrayButton;

const Numbers = () => {
  return (
    <>
      <Area area="k1">
        <NumberButton>1</NumberButton>
      </Area>
      <Area area="k2">
        <NumberButton>2</NumberButton>
      </Area>
      <Area area="k3">
        <NumberButton>3</NumberButton>
      </Area>
      <Area area="k4">
        <NumberButton>4</NumberButton>
      </Area>
      <Area area="k5">
        <NumberButton>5</NumberButton>
      </Area>
      <Area area="k6">
        <NumberButton>6</NumberButton>
      </Area>
      <Area area="k7">
        <NumberButton>7</NumberButton>
      </Area>
      <Area area="k8">
        <NumberButton>8</NumberButton>
      </Area>
      <Area area="k9">
        <NumberButton>9</NumberButton>
      </Area>
      <Area area="zr">
        <NumberButton>0</NumberButton>
      </Area>
    </>
  );
};

const Cal = () => (
  <>
    <Area area="di">
      <OrangeButton>÷</OrangeButton>
    </Area>
    <Area area="pw">
      <OrangeButton>×</OrangeButton>
    </Area>
    <Area area="mi">
      <OrangeButton>-</OrangeButton>
    </Area>
    <Area area="pl">
      <OrangeButton>+</OrangeButton>
    </Area>
    <Area area="do">
      <NumberButton>.</NumberButton>
    </Area>
    <Area area="eq">
      <OrangeButton>=</OrangeButton>
    </Area>
    <Area area="ac">
      <OrangeButton>AC</OrangeButton>
    </Area>
    <Area area="pm">
      <OrangeButton>+/-</OrangeButton>
    </Area>
    <Area area="pc">
      <OrangeButton>%</OrangeButton>
    </Area>
  </>
);

const Container = styled(FlexCenter)`
  height: 100vh;
  display: flex;
  font-family: "Quicksand", sans-serif;

  background: linear-gradient(
    90deg,
    rgba(100, 130, 200, 1) 0%,
    rgba(162, 165, 194, 1) 100%
  );
`;
export const Calcurator = () => {
  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      />
      <BlackBackground>
        <Grid>
          <Area area="ii">
            <Input />
          </Area>
          {/* <SolarPanel /> */}
          <Numbers />
          <Cal />
        </Grid>
      </BlackBackground>
    </Container>
  );
};
