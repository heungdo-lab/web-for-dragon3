import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

import { ScreenContext } from "../context/ScreenContext";
import { DRAGON, WEB, MOBILE } from "../constants/strings";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.screenSize === WEB
      ? `
          width: 350px;
          margin-top: 30px;
          margin-bottom: 40px;
        `
      : props.screenSize === MOBILE
      ? `
          width: 250px;
          margin-top: 10px;
          margin-bottom: 15px;
        `
      : `
          width: 350px;
          margin-top: 10px;
          margin-bottom: 15px;
        `}
  background-color: white;
  z-index: 1;
  /* HOVER */
  &:hover {
    background: ${(props) =>
      props.content === DRAGON
        ? `linear-gradient(
      to left,
      rgba(183, 33, 255, 0.6),
      rgba(33, 213, 253, 0.6)
    )`
        : `linear-gradient(
      to left,
      rgba(34, 108, 54, 0.6),
      rgba(254, 81, 150, 0.6)
    )`};
    cursor: pointer;
  }
`;

const ProductImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${(props) => (props.screenSize === WEB ? "20px" : "5px")};
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  ${(props) =>
    props.screenSize === WEB
      ? `
          font-size: 16px;
          font-weight: 700;
        `
      : props.screenSize === MOBILE
      ? `
          font-size: 12px;
          font-weight: 500;
        `
      : `
          font-size: 14px;
          font-weight: 600;
        `}
  margin: 10px 0;
  background: ${(props) =>
    props.content === DRAGON
      ? `linear-gradient(to right, #b721ff, #21d5fd)`
      : `linear-gradient(to right, #226c36, #fe5196)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Info = styled.div`
  ${(props) =>
    props.screenSize === WEB
      ? `
          font-size: 14px;
        `
      : props.screenSize === MOBILE
      ? `
          font-size: 10px;
        `
      : `
          font-size: 12px;
        `}
  margin: 2px;
`;

const Price = styled.div`
  ${(props) =>
    props.screenSize === WEB
      ? `
          font-size: 14px;
          font-weight: 600;
          margin: 10px 0 30px 0;
        `
      : props.screenSize === MOBILE
      ? `
          font-size: 10px;
          font-weight: 500;
          margin: 10px 0 15px 0;
        `
      : `
          font-size: 12px;
          font-weight: 600;
          margin: 10px 0 15px 0;
        `}
`;

const Product = ({
  id,
  title,
  number,
  size,
  price,
  images,
  content,
  openProductDetail,
}) => {
  const [{ screenSize }, _] = useContext(ScreenContext);
  const [productItem, setProductItem] = useState(null);

  useEffect(() => {
    setProductItem({
      id,
      title,
      number,
      size,
      price,
      images,
      content,
    });
  }, []);

  return (
    <ProductContainer
      screenSize={screenSize}
      content={content}
      onClick={openProductDetail.bind(this, productItem)}
    >
      <ProductImageBox screenSize={screenSize}>
        <ProductImage key={id} screenSize={screenSize} src={images[0]} />
      </ProductImageBox>
      <ProductInfoBox screenSize={screenSize}>
        <Title screenSize={screenSize} content={content}>
          {title}
        </Title>
        <Info small screenSize={screenSize}>
          {number}
        </Info>
        <Info small screenSize={screenSize}>
          {size}
        </Info>
        <CurrencyFormat
          renderText={(value) => (
            <Price bold screenSize={screenSize}>
              {value}
            </Price>
          )}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"원"}
        />
      </ProductInfoBox>
    </ProductContainer>
  );
};

export default Product;
