import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 170px;
  height: 45px;
  background-color: ${(props) => props.theme.lightGreenColor};
  color: white;
  font-weight: 600;
  border-radius: 40px;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: white;
    color: ${(props) => props.theme.lightGreenColor};
    border: 2px ${(props) => props.theme.lightGreenColor} solid;
    transition: 0.5s ease all;
  }
`;

const Button = ({ text, onClick, className }) => (
  <Container onClick={onClick} className={className}>
    {text}
  </Container>
);

export default Button;
