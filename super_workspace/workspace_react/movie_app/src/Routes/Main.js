import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: "row";
`;

const ImageBox = styled.button`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.bgColor};
  &:not(:last-child) {
    margin-right: 10px;
  }
  border-width: 0;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: inherit;
  max-width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>Heungdo Lab</title>
      </Helmet>
      <MainContainer>
        <Link to="/todosecretary">
          <ImageBox>
            <Image
              src={require("../images/todo_secretary_logo.png")}
              alt="Todo Secretary Logo"
            />
          </ImageBox>
        </Link>
        <Link to="/guessmynumber">
          <ImageBox>
            <Image
              src={require("../images/guess_my_number_logo.png")}
              alt="Guess My Number Logo"
            />
          </ImageBox>
        </Link>
      </MainContainer>
    </>
  );
};
