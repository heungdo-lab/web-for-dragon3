import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: ${(props) => props.theme.redColor}; */
  background-color: ${(props) => props.theme.lightRedColor};
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  ${(props) => props.theme.flexBox}
  padding: 5px 0px;
  z-index: 2;
`;

const CalculatorLink = styled(Link)`
  text-decoration: none;
`;

const Text = styled.h1`
  color: ${(props) => props.theme.whiteColor};
  font-size: 24px;
`;

export default () => {
  return (
    <Header>
      <CalculatorLink to="/">
        <Text>Days Calculator</Text>
      </CalculatorLink>
    </Header>
  );
};
