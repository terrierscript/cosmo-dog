import { Border } from "../Border";

export default [
  {
    component: Border,
    props: {
      top: true,
      children: "Top"
    }
  },
  {
    component: Border,
    props: {
      top: true,
      left: true,
      children: "Top Left"
    }
  },
  {
    component: Border,
    props: {
      right: true,
      bottom: true,
      width: 2,
      children: "Bottom Rigth"
    }
  }
];
