import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { ScreenContext } from "../context/ScreenContext";

import Product from "../components/Product";
import { dragonProductList } from "../utils/ProductForDragon";
import { ittallyProductList } from "../utils/ProductForIttally";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: ${(props) =>
    props.screenSize === "web"
      ? "80px"
      : props.screenSize === "mobile"
      ? "61px"
      : "71px"};
`;

const HomeEachPart = styled.div`
  width: 50%;
  height: 100%;
  padding: ${(props) =>
    props.screenSize === "web"
      ? "20px"
      : props.screenSize === "mobile"
      ? "10px"
      : "10px"};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-width: ${(props) => (props.screenSize === "mobile" ? "2px" : "4px")};
  border-style: solid;
  border-image: ${(props) =>
    props.content === "dragon"
      ? `linear-gradient(
    to right,
    rgba(183, 33, 255, 0.9),
    rgba(33, 212, 253, 0.9)
  )`
      : `linear-gradient(
    to right,
    rgba(34, 108, 54, 0.9),
    rgba(254, 81, 150, 0.9)
  )`};
  border-image-slice: 1;
`;

const Home = () => {
  const [{ screenSize }, setScreenInfo] = useContext(ScreenContext);

  const windowResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 425) {
      /* Mobile */
      setScreenInfo((curState) => ({
        ...curState,
        screenSize: "mobile",
      }));
    } else if (windowWidth > 425 && windowWidth <= 768) {
      /* Tablet */
      setScreenInfo((curState) => ({
        ...curState,
        screenSize: "tablet",
      }));
    } else if (windowWidth > 768) {
      /* Web */
      setScreenInfo((curState) => ({
        ...curState,
        screenSize: "web",
      }));
    }
  };

  useEffect(() => {
    windowResize();

    window.addEventListener("resize", windowResize);
  }, []);

  return (
    <HomeContainer screenSize={screenSize}>
      <HomeEachPart screenSize={screenSize} content="dragon">
        {dragonProductList.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            number={item.number}
            size={item.size}
            price={item.price}
            images={item.images}
            content={"dragon"}
          />
        ))}
      </HomeEachPart>
      <HomeEachPart screenSize={screenSize} content="ittally">
        {ittallyProductList.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            number={item.number}
            size={item.size}
            price={item.price}
            images={item.images}
            content={"ittally"}
          />
        ))}
      </HomeEachPart>
    </HomeContainer>
  );
};

export default Home;
