const BOX_BORDER = "1px solid #e6e6e6";
const RESULT_COLOR = "rgba(237, 73, 86, 0.5)";
const RED_COLOR = "#ED4956";
const BORDER_RADIUS = "4px";
const BOX_SHADOW = "0 1px 6px 0 rgba(32, 33, 36, 0.2)";
const FLEX = "flex";
const COLUMN = "column";
const CENTER = "center";
const FLEX_BOX = `display: ${FLEX};
                  justify-content: ${CENTER};
                  align-items: ${CENTER};`;
const RESULT_BOX = `border: 1px solid ${RED_COLOR};
border-radius: 4px;
background-color: ${RED_COLOR};`;

export default {
  maxWidth: "1380px",
  bgColor: "#F5F5F5",
  blackColor: "#262626",
  whiteColor: "#FFFFFF",
  redColor: RED_COLOR,
  lightRedColor: RESULT_COLOR,
  blueColor: "#3897f0",
  yellowColor: "#ffeaab",
  boxBorder: BOX_BORDER,
  borderRadius: BORDER_RADIUS,
  boxShadow: BOX_SHADOW,
  whiteBox: `border: ${BOX_BORDER};
             border-radius: ${BORDER_RADIUS};
             background-color: white;`,
  flexBox: FLEX_BOX,
  flexColumnBox: `${FLEX_BOX}
                  flex-direction: ${COLUMN};`,
  resultBox: RESULT_BOX,
};
