import styled from "styled-components";
import React from "react";
import { FullSize } from "components/background/Background";
import { ObjectFitImg } from "components/image/Image";
import img from "./img2.jpg";
import { Form } from "./Form";

const Background = styled(FullSize)`
  background: linear-gradient(
    0deg,
    rgba(189, 63, 50, 1) 0%,
    rgba(203, 53, 107, 1) 100%
  );
  font-family: "Nunito Sans", sans-serif;
`;

const Block = styled.div`
  width: 640px;
  height: 480px;
  align-self: center;
  text-align: center;
  background: #eee8d5;
  border-radius: 16px;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  height: 100%;
`;

export const SignUp = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans"
        rel="stylesheet"
      />
      <Background>
        <Block>
          <Grid>
            <Form />
            <div>
              <ObjectFitImg src={img} />
            </div>
          </Grid>
        </Block>
      </Background>
    </div>
  );
};
