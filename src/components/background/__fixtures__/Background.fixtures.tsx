import * as React from "react";
import {
  Gradient,
  SampleImageBackground
} from "components/background/Background";
import styled from "styled-components";

const Fullheight = styled.div`
  height: 100vh;
  color: white;
`;

export default [
  {
    name: "Gradient",
    component: Gradient,
    props: {
      children: <Fullheight>Some Content</Fullheight>
    }
  },
  {
    name: "ImageBackground",
    component: SampleImageBackground,
    props: {
      children: <Fullheight>Some Content</Fullheight>
    }
  }
];
