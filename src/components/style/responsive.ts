import styled from "styled-components"; // You need this as well
import media from "styled-media-query";

export const mediaMobile = media.lessThan("medium");

export const withMedia = (Component, extend) => {
  return styled(Component)`
    ${mediaMobile`
      ${extend}
    `};
  `;
};
