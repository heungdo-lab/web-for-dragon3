import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ScreenProvider } from "../context/ScreenContext";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

import Header from "./Header";
import Routes from "./Routes";

const App = () => {
  return (
    <ScreenProvider>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Router>
            <>
              <Header />
              <Routes />
            </>
          </Router>
        </>
      </ThemeProvider>
    </ScreenProvider>
  );
};

export default App;
