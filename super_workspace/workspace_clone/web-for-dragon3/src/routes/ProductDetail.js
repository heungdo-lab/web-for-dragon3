import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Switch, Redirect } from "react-router-dom";
import Helmet from "react-helmet";

import { dragonProductList } from "../utils/ProductForDragon";
import { ittallyProductList } from "../utils/ProductForIttally";

import {
  DRAGON,
  ITTALLY,
  DRAGON_KOREAN,
  ITTALLY_KOREAN,
} from "../constants/strings";

const View = styled.div`
  padding-top: 80px;
`;

export default withRouter(
  ({
    match: {
      params: { content, id },
    },
  }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkProduct = () => {
      let item;
      if (content === DRAGON) {
        item = dragonProductList.filter((item) => item.id === id);
      } else if (content === ITTALLY) {
        item = ittallyProductList.filter((item) => item.id === id);
      }

      if (item.length === 1) {
        console.log("if");
        setProduct(item);
      } else {
        console.log("else");
        return (
          <Switch>
            <Redirect from="*" to="/" />
          </Switch>
        );
      }
    };

    useEffect(() => {
      checkProduct();

      setLoading(false);
    }, []);

    // if (error) {
    //   return (
    //     <Switch>
    //       <Redirect from="*" to="/" />
    //     </Switch>
    //   );
    // }

    return (
      <>
        <Helmet>
          <title>{content === DRAGON ? DRAGON_KOREAN : ITTALLY_KOREAN}</title>
        </Helmet>
        <View>Hello!</View>
      </>
    );
  }
);
