import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
  background-color: pink;
  padding: 1px 5px 10px 20px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title>Open up App.js to start working on your app!</Title>
      </Container>
    );
  }
}
