import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { DRAGON_KOREAN } from "../constants/strings";

export default () => {
  return (
    <>
      <Helmet>
        <title>{DRAGON_KOREAN}</title>
      </Helmet>
    </>
  );
};
