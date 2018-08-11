import styled from "styled-components";

const Square = styled.img<{
  size: number;
}>`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`;

export const Avater = styled(Square)`
  border-radius: 100%;
  border: 1px solid #ccc;
`;
