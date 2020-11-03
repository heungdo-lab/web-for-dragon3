import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.purpleColor};
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  ${(props) => props.theme.flexBox}
  padding: 25px 0px;
  z-index: 2;
`;

export default () => {
  return (
    <Header>
      <Link to="/">
        <img src={require("../images/homelogo.png")} alt="Home Logo" />
      </Link>
    </Header>
  );
};
