import { Calcurator } from "../Calculator";
import { SolarPanel } from "../SolarPanel";
import { ButtonSamples } from "../Button";

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
    component: ButtonSamples,
    props: {
      children: "1"
    }
  }
];
