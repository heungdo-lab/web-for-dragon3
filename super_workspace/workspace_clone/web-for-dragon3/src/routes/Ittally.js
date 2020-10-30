import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { ITTALLY_KOREAN } from "../constants/strings";

export default () => {
  return (
    <>
      <Helmet>
        <title>{ITTALLY_KOREAN}</title>
      </Helmet>
    </>
  );
};
