import React, { SFC, Children, ReactNode, createContext } from "react";

class CardInputSanitized extends React.Component<
  { number: string; children: (string) => ReactNode },
  { saniizied: string }
> {
  render() {
    return (
      <div>
        <input type="tel" />
      </div>
    );
  }
}
export const Checkout = ({ name }) => {
  return <div>Please input your card {name}</div>;
};

type Typ = {
  state?: { value: number };
  actions?: { setValue: (value: number) => void };
};
export const { Provider, Consumer } = createContext<Typ>({});
