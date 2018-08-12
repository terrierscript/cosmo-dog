import styled from "styled-components";
import bg from "./bg.jpg";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
`;

export const Block = styled.div`
  width: 680px;
  height: 480px;
  align-self: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);

  border-radius: 8px;
`;
