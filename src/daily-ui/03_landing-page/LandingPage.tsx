import styled from "styled-components";
import React from "react";
import dog1 from "./dog1.jpg";
import dog3 from "./dog3.jpg";
import dog2 from "./dog2.jpg";
import dog4 from "./dog4.jpg";
import dog5 from "./dog5.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const AreaInner = styled.div`
  height: 90vh;
  flex-grow: 1;
  transition: flex-grow 0.5s;
  background-position: center;
  background-size: cover;
  filter: sepia(100%);
  :hover {
    flex-grow: 20;
    filter: sepia(0%);
    transition: flex-grow, filter;
    transition-duration: 0.5s;
  }
`;

const Area = styled(AreaInner)<{ image?: string }>`
  background-image: ${({ image = null }) => `url(${image})`};
`;

const images = [dog5, dog2, dog1, dog3, dog4];
export const LandingPage = () => {
  return (
    <Container>
      {images.map((image, i) => {
        return <Area key={i} image={image} />;
      })}
    </Container>
  );
};
