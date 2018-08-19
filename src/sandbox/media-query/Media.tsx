import React from "react";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { withResponsive } from "components/style/responsive";

export const mediaMobile = media.lessThan("medium");

const BaseItem = styled.div`
  color: red;
`;

const spExtend = css`
  color: blue;
`;

const SomeItem = withResponsive(BaseItem, spExtend);

const SpSomeItem = styled.div`
  ${spExtend};
`;
export const Media = () => {
  return (
    <div>
      <SomeItem>aaa</SomeItem>
      <BaseItem>PC</BaseItem>
      <SpSomeItem>SP</SpSomeItem>
    </div>
  );
};
