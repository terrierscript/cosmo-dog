import * as React from "react";
import { Gradient, ImageBackground } from "../Background";
import styled from "styled-components";

const Fullheight = styled.div`
  height: 100vh;
`;
export default [
  {
    name: "Gradient",
    component: () => (
      <Gradient>
        <Fullheight>Some Content</Fullheight>
      </Gradient>
    )
  },
  {
    name: "ImageBackground",
    component: () => (
      <ImageBackground>
        <Fullheight>Some Content</Fullheight>
      </ImageBackground>
    )
  }
];
