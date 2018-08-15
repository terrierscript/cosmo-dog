import React, { SFC, Children, ReactNode } from "react";

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
