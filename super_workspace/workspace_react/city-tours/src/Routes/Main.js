import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: "row";
`;

const ImageBox = styled.div`
  width: 300px;
  height: 650px;
  background-color: ${(props) => props.theme.yellowColor};
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Image = styled.img`
  width: inherit;
  max-width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>Heungdo Lab</title>
      </Helmet>
      <MainContainer>
        <ImageBox>
          <Image
            src={require("../images/screenshot1.png")}
            alt="Screenshot 1"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/screenshot2.png")}
            alt="Screenshot 2"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/screenshot3.png")}
            alt="Screenshot 3"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/screenshot4.png")}
            alt="Screenshot 4"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/screenshot5.png")}
            alt="Screenshot 5"
          />
        </ImageBox>
      </MainContainer>
    </>
  );
};
