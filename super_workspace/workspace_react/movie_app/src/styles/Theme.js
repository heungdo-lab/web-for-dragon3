const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";
const BOX_SHADOW = "0 1px 6px 0 rgba(32, 33, 36, 0.2)";
const FLEX = "flex";
const COLUMN = "column";
const CENTER = "center";
const FLEX_BOX = `display: ${FLEX};
                  justify-content: ${CENTER};
                  align-items: ${CENTER};`;

export default {
  maxWidth: "1380px",
  bgColor: "#F5F5F5",
  blackColor: "#262626",
  darkGreyColor: "#999",
  lightGreyColor: "#c7c7c7",
  redColor: "#ED4956",
  blueColor: "#3897f0",
  darkBlueColor: "#003569",
  lightGreenColor: "#31b99e",
  pinkColor: "#e84393",
  yellowColor: "#fdcb6e",
  greenColor: "#00b894",
  otherBlueColor: "#0984e3",
  purpleColor: "#6c5ce7",
  lightPurpleColor: "#ed89fa",
  boxBorder: BOX_BORDER,
  borderRadius: BORDER_RADIUS,
  boxShadow: BOX_SHADOW,
  whiteBox: `border: ${BOX_BORDER};
             border-radius: ${BORDER_RADIUS};
             background-color: white;`,
  flexBox: FLEX_BOX,
  flexColumnBox: `${FLEX_BOX}
                  flex-direction: ${COLUMN};`,
};
