import styled from "styled-components"; // You need this as well
import mediaQuery from "styled-media-query";
import Media from "react-media";
import React from "react";
export const mediaMobile = mediaQuery.lessThan("medium");

export const withMediaStyle = (Component, extend) => {
  return styled(Component)`
    ${mediaMobile`
      ${extend}
    `};
  `;
};

export const withMediaComponent = (DesktopComponent, MobileComponent) => {
  return (props) => {
    // TODO: もうちょっとなんとか
    if (
      // @ts-ignore
      typeof window.targetWindow !== "object" ||
      // @ts-ignore
      typeof window.targetWindow.matchMedia === "function"
    ) {
      return <MobileComponent {...props} />;
    }
    return (
      <Media query="(max-width: 768px)">
        {(matches) =>
          matches ? (
            <MobileComponent {...props} />
          ) : (
            <DesktopComponent {...props} />
          )
        }
      </Media>
    );
  };
};
