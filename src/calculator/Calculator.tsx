import styled from "styled-components";
import React from "react";
import { OrangeButton, GrayButton } from "./Button";

const template = `
". . so so"
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
  border-radius: 20px;
  width: fit-content;
`;

const Input = styled.input`
  font-size: 1.5em;
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

const Panel = styled.div`
  height: 40px;
  width: 32px;
  margin-left: 1px;
  background: rgb(78, 13, 13);
  background: linear-gradient(
    5deg,
    rgba(78, 13, 13, 1) 0%,
    rgba(145, 51, 51, 1) 47%,
    rgba(102, 10, 10, 1) 56%,
    rgba(186, 83, 83, 1) 59%,
    rgba(125, 41, 41, 1) 61%
  );
  display: inline-block;
`;
const SolarPanel = () => {
  return (
    <Area area="so">
      <Panel />
      <Panel />
      <Panel />
      <Panel />
    </Area>
  );
};
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

export const Calcurator = () => {
  return (
    <BlackBackground>
      <Grid>
        <Area area="ii">
          <Input />
        </Area>
        <SolarPanel />
        <Numbers />
        <Cal />
      </Grid>
    </BlackBackground>
  );
};
