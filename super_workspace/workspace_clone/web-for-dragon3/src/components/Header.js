import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ScreenContext } from "../context/ScreenContext";

import homeImageLogo from "../images/home_logo.png";
import dragonImageLogo from "../images/dragon_image_logo.png";
import dragonTextLogo from "../images/dragon_text_logo.png";
import ittallyImageLogo from "../images/ittally_image_logo.png";
import ittallyTextLogo from "../images/ittally_text_logo.png";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${(props) =>
    props.screenSize === "web"
      ? "30px"
      : props.screenSize === "mobile"
      ? "10px"
      : "20px"};
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
  }
  &:last-child {
    margin-left: auto;
  }
`;

const LogoImage = styled.img`
  height: 35px;
`;

export default () => {
  const [{ screenSize }, _] = useContext(ScreenContext);

  return (
    <Header>
      <HeaderWrapper screenSize={screenSize}>
        <HeaderColumn>
          <Link to="/dragon">
            {screenSize === "web" ? (
              <LogoImage src={dragonTextLogo} alt="dragon logo" />
            ) : (
              <LogoImage src={dragonImageLogo} alt="dragon logo" />
            )}
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/">
            <LogoImage src={homeImageLogo} alt="home logo" />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/ittally">
            {screenSize === "web" ? (
              <LogoImage src={ittallyTextLogo} alt="ittally logo" />
            ) : (
              <LogoImage src={ittallyImageLogo} alt="ittally logo" />
            )}
          </Link>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
