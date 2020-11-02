import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { ScreenContext } from "../context/ScreenContext";

import { dragonProductList } from "../utils/ProductForDragon";
import { ittallyProductList } from "../utils/ProductForIttally";

import Product from "../components/Product";
import ProductDetailModalPopup from "../components/ProductDetailModalPopup";

import {
  DRAGON,
  ITTALLY,
  WEB,
  TABLET,
  MOBILE,
  DRAGON_KOREAN,
  ITTALLY_KOREAN,
} from "../constants/strings";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: ${(props) =>
    props.screenSize === WEB
      ? "80px"
      : props.screenSize === MOBILE
      ? "61px"
      : "71px"};
`;

const HomeEachPart = styled.div`
  width: 50%;
  height: 100%;
  padding: ${(props) =>
    props.screenSize === WEB
      ? "20px"
      : props.screenSize === MOBILE
      ? "10px"
      : "10px"};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-width: ${(props) => (props.screenSize === MOBILE ? "2px" : "4px")};
  border-style: solid;
  border-image: ${(props) =>
    props.content === DRAGON
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
  const [modalDisplay, setModalDisplay] = useState("none");

  const windowResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 425) {
      /* Mobile */
      setScreenInfo((curState) => ({
        ...curState,
        screenSize: MOBILE,
      }));
    } else if (windowWidth > 425 && windowWidth <= 768) {
      /* Tablet */
      setScreenInfo((curState) => ({
        ...curState,
        screenSize: TABLET,
      }));
    } else if (windowWidth > 768) {
      /* Web */
      setScreenInfo((curState) => ({
        ...curState,
        screenSize: WEB,
      }));
    }
  };

  useEffect(() => {
    windowResize();

    window.addEventListener("resize", windowResize);
  }, []);

  window.onclick = (event) => {
    /* modal popup일 경우에만, window.onclick의 영향이 미치도록 하기 위해 */
    if (modalDisplay === "block") {
      const targetClassName = event.target.className;
      /* 메시지 보내는 icon(plane)의 경우 className type이 object야.
        그래서 typeof 검사를 안 해 주면, targetClassName.includes에서 오류가 나.
        왜냐면 includes는 type이 string인 경우에만 동작하니까. */
      if (
        typeof targetClassName === "string" &&
        targetClassName.includes("modal")
      ) {
        closeModal();
      }
    }
  };

  const closeModal = () => {
    setModalDisplay("none");
    /* modal popup 종료시, 다시 body 스크롤 보이도록 */
    document.body.style.overflow = "auto";
  };

  const selectQuestion = () => {
    setModalDisplay("block");
    /* modal popup시, body 스크롤 없애기 */
    document.body.style.overflow = "hidden";
  };

  return (
    <HomeContainer screenSize={screenSize}>
      <Helmet>
        <title>
          {DRAGON_KOREAN} | {ITTALLY_KOREAN}
        </title>
      </Helmet>
      <HomeEachPart screenSize={screenSize} content={DRAGON}>
        {dragonProductList.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            number={item.number}
            size={item.size}
            price={item.price}
            images={item.images}
            content={DRAGON}
            selectQuestion={selectQuestion}
          />
        ))}
      </HomeEachPart>
      <HomeEachPart screenSize={screenSize} content={ITTALLY}>
        {ittallyProductList.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            number={item.number}
            size={item.size}
            price={item.price}
            images={item.images}
            content={ITTALLY}
            selectQuestion={selectQuestion}
          />
        ))}
      </HomeEachPart>

      {/* The Modal */}
      <ProductDetailModalPopup
        modalDisplay={modalDisplay}
        closeModal={closeModal}
      />
    </HomeContainer>
  );
};

export default Home;
