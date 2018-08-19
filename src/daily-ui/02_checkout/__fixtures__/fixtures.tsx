import { Checkout } from "../Checkout";
import { CardInput } from "../CardInput";

export default [
  {
    component: Checkout,
    props: { name: "Taro" }
  },
  {
    component: CardInput,
    props: { number: "1111111111111111" }
  }
];
