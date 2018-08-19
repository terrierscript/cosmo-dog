import styled from "styled-components"; // You need this as well
import mediaQuery from "styled-media-query";
import Media from "react-media";
import React from "react";
export const mediaMobile = mediaQuery.lessThan("medium");

export const withResponsive = (Component, extend) => {
  return styled(Component)`
    ${mediaMobile`
      ${extend}
    `};
  `;
};

export const withResponsiveComponent = (DesktopComponent, MobileComponent) => {
  props => {
    return (
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <DesktopComponent {...props} />
          ) : (
            <MobileComponent {...props} />
          )
        }
      </Media>
    );
  };
};
