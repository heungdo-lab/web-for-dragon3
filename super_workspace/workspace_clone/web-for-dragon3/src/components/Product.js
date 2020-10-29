import React, { useContext } from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

import { ScreenContext } from "../context/ScreenContext";

import Text from "./Text";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 10px;
  width: ${(props) =>
    props.screenSize === "web"
      ? "320px"
      : props.screenSize === "mobile"
      ? "120px"
      : "220px"};
  background-color: white;
  z-index: 1;
`;

const ProductImageBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

const ProductImage = styled.img`
  width: 90%;
`;

const ProductInfoBox = styled.div``;

const Product = ({ id, title, number, size, price, images }) => {
  const [{ screenSize }, _] = useContext(ScreenContext);

  return (
    <ProductContainer screenSize={screenSize}>
      <ProductImageBox>
        <ProductImage screenSize={screenSize} src={images[0]} alt="image" />
      </ProductImageBox>
      <ProductInfoBox>
        <Text title heavy center>
          {title}
        </Text>
        <Text>{number}</Text>
        <Text>{size}</Text>
        <CurrencyFormat
          renderText={(value) => <h3>{value}</h3>}
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
