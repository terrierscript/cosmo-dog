import React from "react";
import styled, { css } from "styled-components";
import { withMediaStyle } from "components/style/responsive";

const BaseItem = styled.div`
  color: red;
`;

const spExtend = css`
  color: blue;
`;

const SomeItem = withMediaStyle(BaseItem, spExtend);

const SpSomeItem = styled.div`
  ${spExtend};
`;

export const MediaStyle = () => {
  return (
    <div>
      <SomeItem>aaa</SomeItem>
      <BaseItem>PC</BaseItem>
      <SpSomeItem>SP</SpSomeItem>
    </div>
  );
};
