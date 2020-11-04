import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { ScreenContext } from "../context/ScreenContext";

import plane from "../images/plane.png";

import {
  DRAGON,
  WEB,
  NONWEB,
  MOBILE,
  STRING,
  MODAL,
  PREVIOUS,
  NEXT,
} from "../constants/strings";

// import LinkButton from "./LinkButton";

/* Modal Popup - start */
const Wrapper = styled.div`
  display: ${(props) => props.modalDisplay}; /* Hidden by default - none */
  position: fixed; /* Stay in place */
  z-index: 15; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto; /* modal popup 상태에서, 화면을 축소하면 scroll이 생기도록 */
`;

const Container = styled.div`
  width: ${(props) =>
    props.screenSize === MOBILE
      ? `${window.innerWidth * 0.7}px`
      : `${window.innerWidth * 0.8}px`};
  height: ${(props) =>
    props.screenSize === MOBILE
      ? `${window.innerHeight * 0.7}px`
      : `${window.innerHeight * 0.8}px`};

  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.screenSize === WEB ? "row" : "column")};
  ${(props) => props.theme.whiteBox};
  margin: 90px auto;
  padding: 15px;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: -30px;
  right: -30px;
  color: white;
  float: right;
  font-size: 35px;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
/* Modal Popup - end */

const WebEachPart = styled.div`
  width: 50%;
  position: relative;
  &:last-child {
    padding: 15px;
    border-width: 2px;
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
  }
`;

const ModalProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ModalHeader = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
`;

const ModalProductTitle = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.size === NONWEB ? "flex-end" : "center")};
  font-size: 3vw;
  font-weight: 700;
  /* color... */
  background: ${(props) =>
    props.content === DRAGON
      ? `linear-gradient(to right, #b721ff, #21d5fd)`
      : `linear-gradient(to right, #226c36, #fe5196)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color... */
`;

const ModalProductPrice = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1.5vw;
  font-weight: 600;
`;

const ModalBody = styled.div`
  height: 80%;
  /* background-color: lightsalmon; */
`;

const NonWebEachPart = styled.div`
  height: 50%;
  position: relative;
  &:last-child {
    margin-top: 2vh;
    padding: 1.5vw;
    border-width: 2px;
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
  }
`;

const PreviousIcon = styled.span`
  position: absolute;
  top: ${(props) => (props.size === NONWEB ? "15vh" : "30vh")};
  left: 0;
  /* color... */
  background: ${(props) =>
    props.content === DRAGON
      ? `linear-gradient(to right, #b721ff, #21d5fd)`
      : `linear-gradient(to right, #226c36, #fe5196)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color... */
  font-size: 5vw;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const NextIcon = styled.span`
  position: absolute;
  top: ${(props) => (props.size === NONWEB ? "15vh" : "30vh")};
  right: 0;
  /* color... */
  background: ${(props) =>
    props.content === DRAGON
      ? `linear-gradient(to right, #b721ff, #21d5fd)`
      : `linear-gradient(to right, #226c36, #fe5196)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color... */
  font-size: 5vw;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const LinkButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: ${(props) => (props.screenSize === WEB ? "4vw" : "4vh")};
  height: ${(props) => (props.screenSize === WEB ? "4vw" : "4vh")};
  border: 0;
  border-radius: ${(props) => (props.screenSize === WEB ? "2vw" : "2vh")};
  background-color: lightpink;
  /* color... */
  /* background: linear-gradient(to right, #b721ff, #21d5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  /* color... */
  box-shadow: 2px 2px 10px 5px #262626;
  &:hover {
    cursor: pointer;
    outline: none;
  }
`;

const PlaneImage = styled.img`
  width: ${(props) => (props.screenSize === WEB ? "2vw" : "2vh")};
  height: ${(props) => (props.screenSize === WEB ? "2vw" : "2vh")};
`;

export default withRouter(
  ({ modalDisplay, closeModal, productItem, history }) => {
    const [{ screenSize }, _] = useContext(ScreenContext);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    console.log("history: ", history);

    window.onclick = (event) => {
      const targetClassName = event.target.className;
      if (
        typeof targetClassName === STRING &&
        targetClassName.includes(MODAL)
      ) {
        exit();
      }
    };

    const exit = () => {
      setCurrentItemIndex(0);
      closeModal();
    };

    const slide = (direction) => {
      const imagesLength = productItem.images.length;

      if (direction === PREVIOUS) {
        if (imagesLength - currentItemIndex === imagesLength) {
          setCurrentItemIndex(imagesLength - 1);
        } else {
          setCurrentItemIndex(currentItemIndex - 1);
        }
      } else if (direction === NEXT) {
        if (imagesLength - currentItemIndex === 1) {
          setCurrentItemIndex(0);
        } else {
          setCurrentItemIndex(currentItemIndex + 1);
        }
      }
    };

    return productItem ? (
      <Wrapper className={MODAL} modalDisplay={modalDisplay}>
        {/* Modal content */}
        <Container screenSize={screenSize}>
          <CloseIcon onClick={exit}>
            {/* &times; = 'x' in HTML - HTML Entities */}
            &times;
          </CloseIcon>
          {screenSize === WEB ? (
            <>
              <WebEachPart>
                <PreviousIcon
                  onClick={slide.bind(this, PREVIOUS)}
                  content={productItem.content}
                >
                  {/* &#60; = '<' in HTML - HTML Entities */}
                  &#60;
                </PreviousIcon>
                <ModalProductImage src={productItem.images[currentItemIndex]} />
                <NextIcon
                  onClick={slide.bind(this, NEXT)}
                  content={productItem.content}
                >
                  {/* &#62; = '>' in HTML - HTML Entities */}
                  &#62;
                </NextIcon>
              </WebEachPart>
              <WebEachPart content={productItem.content}>
                <ModalHeader>
                  <ModalProductTitle content={productItem.content}>
                    {productItem.title}
                  </ModalProductTitle>
                  <CurrencyFormat
                    renderText={(value) => (
                      <ModalProductPrice>{value}</ModalProductPrice>
                    )}
                    decimalScale={2}
                    value={productItem.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"원"}
                  />
                </ModalHeader>
                <ModalBody></ModalBody>
              </WebEachPart>
            </>
          ) : (
            <>
              <NonWebEachPart>
                <PreviousIcon
                  onClick={slide.bind(this, PREVIOUS)}
                  content={productItem.content}
                  size={NONWEB}
                >
                  {/* &#60; = '<' in HTML - HTML Entities */}
                  &#60;
                </PreviousIcon>
                <ModalProductImage src={productItem.images[currentItemIndex]} />
                <NextIcon
                  onClick={slide.bind(this, NEXT)}
                  content={productItem.content}
                  size={NONWEB}
                >
                  {/* &#62; = '>' in HTML - HTML Entities */}
                  &#62;
                </NextIcon>
              </NonWebEachPart>
              <NonWebEachPart>
                <ModalHeader>
                  <ModalProductTitle
                    content={productItem.content}
                    size={NONWEB}
                  >
                    {productItem.title}
                  </ModalProductTitle>
                  <CurrencyFormat
                    renderText={(value) => (
                      <ModalProductPrice size={NONWEB}>
                        {value}
                      </ModalProductPrice>
                    )}
                    decimalScale={2}
                    value={productItem.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"원"}
                  />
                </ModalHeader>
                <ModalBody></ModalBody>
              </NonWebEachPart>
            </>
          )}
          {/* <Link to="/product"> */}
          <LinkButton screenSize={screenSize}>
            <PlaneImage src={plane} alt="send" screenSize={screenSize} />
          </LinkButton>
          {/* </Link> */}
        </Container>
      </Wrapper>
    ) : null;
  }
);
