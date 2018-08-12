import { SolarPanel, Calcurator, OrangeButton, GrayButton } from "../";
import React from "react";

const Buttons = () => {
  return (
    <>
      <OrangeButton>1</OrangeButton>
      <GrayButton>1</GrayButton>
    </>
  );
};
export default [
  {
    name: "Main",
    component: Calcurator
  },
  {
    name: "SolarPanel",
    component: SolarPanel
  },
  {
    name: "Button",
    component: Buttons,
    props: {
      children: "1"
    }
  }
];
