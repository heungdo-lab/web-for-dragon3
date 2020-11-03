import React from "react";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import Routes from "./Routes";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export default () => (
  <ThemeProvider theme={Theme}>
    <Router>
      <>
        {/* <Header /> */}
        <Wrapper>
          <Routes />
        </Wrapper>
      </>
    </Router>
  </ThemeProvider>
);
