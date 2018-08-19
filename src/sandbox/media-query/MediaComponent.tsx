import React from "react";
import { withMediaComponent } from "components/style/responsive";

const SpItem = () => {
  return <div>sp</div>;
};
const PcItem = () => {
  return <div>pc</div>;
};
const Item = withMediaComponent(PcItem, SpItem);

export const MediaComponent = () => {
  return (
    <div>
      <Item />
    </div>
  );
};
