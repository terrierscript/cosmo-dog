import styled, { css } from "styled-components";

type Props = {
  width: number;
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
};

const border = (direction, props) => {
  const color = props[direction] ? "black" : "transparent";
  const width = props.width || 1;
  return `border-${direction}: solid ${width}px ${color}`;
};
const parseBorderProps = (props: Props) => {
  const borders = [
    border("top", props),
    border("bottom", props),
    border("left", props),
    border("right", props)
  ].join(";\n");
  return css`
    ${borders};
  `;
};

export const Border = styled.div<Props>`
  ${(props) => parseBorderProps(props)};
`;
