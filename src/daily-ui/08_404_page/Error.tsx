import React, { SFC } from "react";
import img400 from "./400.jpg";
import img500 from "./500.jpg";
import { ImageBackground } from "components/background/Background";
import styled from "styled-components";
import { Reset } from "components/style/reset";
import { mediaMobile } from "components/style/responsive";

const impactFont = `'Averia Serif Libre', cursive;`;
const Background = styled.div`
  /* filter: blur(3px); */
  background: hsla(0, 0%, 0%, 0.64);
`;
const template = `
". . . ." 
". c . ." 
". m . ." max-content
". n h ." max-content
". . . ."
`;
const mobileTemplate = `
". . . " 
". c . " 
". m . " 
". n . " 
". h . "
`;

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template: ${template};
  ${mediaMobile`
    grid-template: ${mobileTemplate};
    
  `};
  grid-row-gap: 1em;
  color: hsl(2, 5%, 70%);
  a {
    color: hsl(0, 5%, 90%);
  }
`;

const Inner = styled.div`
  grid-area: n;
`;
const Code = styled.div`
  font-family: ${impactFont};
  grid-area: c;
  font-size: 300px;
  ${mediaMobile`
    font-size: 100px;
  `};
  line-height: 1em;
  /* font-weight: bold; */
  color: hsla(2, 5%, 100%, 0.6);
  /* border-top: 1px solid white; */
`;
const Message = styled.div`
  font-family: ${impactFont};
  grid-area: m;
  font-size: 2em;
  color: hsl(2, 5%, 100%);
`;
const Help = styled.div`
  grid-area: h;
  font-size: 1.2em;
  text-align: right;
  ${mediaMobile`
    text-align: left;
  `};

  a {
    font-weight: bold;
  }
`;

const ErrorPage: SFC<{ code: number; img: string; message: string }> = ({
  code,
  img,
  message,
  children
}) => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Averia+Serif+Libre"
        rel="stylesheet"
      />

      <ImageBackground img={img}>
        <Background>
          <Grid>
            <Code>{code}</Code>
            <Inner>
              <div>{children}</div>
            </Inner>

            <Help>
              <div>Do you need help?</div>
              <a href="#">Help Center</a>
            </Help>
            <Message>{message}</Message>
          </Grid>
        </Background>
      </ImageBackground>
    </div>
  );
};

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: disc;
  margin-left: 1em;
`;

export const Error404 = () => {
  return (
    <ErrorPage code={404} img={img400} message="Not found">
      <Ul>
        <li>Please check URL.</li>
        <li>
          <a href="#">Go back to home</a> if you want.
        </li>
      </Ul>
    </ErrorPage>
  );
};
export const Error500 = () => {
  return (
    <ErrorPage code={500} img={img500} message="Internal Server Error">
      <Ul>
        <li>Sorry, something wrong.</li>
        <li>Try again in 30 minutes.</li>
      </Ul>
    </ErrorPage>
  );
};
