import React from "react";
import styled from "styled-components";

// @ts-ignore
import bg from "./bg.jpg";

const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url(${bg});
`;

const Block = styled.div`
  width: 680px;
  height: 480px;

  align-self: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
`;

export const Grid = styled.div`
  grid-template-columns: repeat(4, 1fr);
`;

export const SignUp = () => {
  return (
    <Background>
      <Block>
        <Grid>
          <div>Welcome</div>
        </Grid>
      </Block>
    </Background>
  );
};
