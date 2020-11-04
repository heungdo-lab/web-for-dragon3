import React from "react";
import styled from "styled-components";

import { WEB, TABLET, MOBILE } from "../constants/strings";

const Container = styled.button`
  width: ${(props) => (props.screenSize === WEB ? "80px" : null)};
  height: ${(props) => (props.screenSize === WEB ? "80px" : null)};
  border: 0;
  border-radius: ${(props) => (props.screenSize === WEB ? "40px" : null)};
  color: white;
  font-weight: 600;
  background-color: lightslategrey;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
`;

export default ({ text, onClick, screenSize }) => (
  <Container onClick={onClick} screenSize={screenSize}>
    {text}
  </Container>
);
