import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Area = styled.div`
  height: 100vh;
  flex-grow: 1;
  transition: flex-grow 0.5s;
  :hover {
    flex-grow: 10;
    transition: flex-grow 0.5s;
  }
`;

export const AnimationSample = () => {
  return (
    <Container>
      <Area style={{ background: "red" }}>a</Area>
      <Area style={{ background: "blue" }}>b</Area>
      <Area style={{ background: "green" }}>c</Area>
    </Container>
  );
};
