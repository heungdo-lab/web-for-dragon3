import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box
    }
    /* 화면을 축소해도 header 부분이 깨지지 않도록 'header { min-width }' 추가 */
    header {
        min-width: 935px;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.blackColor};
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
        min-width: 935px; /* 화면을 축소해도 화면이 깨지지 않도록 'min-width' 추가 */
    }
    a {
        color: ${(props) => props.theme.blueColor};
        text-decoration: none;
    }
    input:focus{
        outline: none;
    }
`;
