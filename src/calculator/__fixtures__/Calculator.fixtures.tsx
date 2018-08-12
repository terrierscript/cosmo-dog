import { OrangeButton, GrayButton } from "../Button";
import { Calcurator } from "../Calculator";
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
    component: Buttons,
    props: {
      children: "1"
    }
  },
  {
    component: Calcurator,
    props: {
      children: "1"
    }
  }
];
