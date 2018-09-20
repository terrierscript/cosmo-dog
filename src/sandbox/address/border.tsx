import styled, { css } from "styled-components";

export type BorderProps = {
  t?: number;
  b?: number;
  l?: number;
  r?: number;
};

const border = (direction, value) => {
  if (value === undefined) {
    return `border-${direction}: none 1px`;
  }
  const width = value;
  return `border-${direction}: inset ${width}px black`;
};

export const parseBorderProps = (props: BorderProps) => {
  const borders = [
    border("top", props.t),
    border("bottom", props.b),
    border("left", props.l),
    border("right", props.r)
  ].join(";\n");
  return css`
    ${borders};
  `;
};

export const Border = styled.div<BorderProps>`
  ${(props) => parseBorderProps(props)};
`;
