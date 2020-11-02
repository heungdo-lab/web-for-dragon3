import React from "react";
import styled from "styled-components";

/* Modal Popup - start */
const ModalWrapper = styled.div`
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

const ModalContainer = styled.div`
  width: 530px;
  height: 450px;
  /* 화면 높이를 축소해도 화면이 깨지지 않도록 'min-height' 추가 */
  min-height: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.whiteBox};
  margin: 180px auto;
  padding: 15px;
`;

const ModalCloseIcon = styled.span`
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

export default ({ modalDisplay, closeModal }) => (
  <ModalWrapper className={"modal"} modalDisplay={modalDisplay}>
    {/* Modal content */}
    <ModalContainer>
      <ModalCloseIcon onClick={closeModal}>
        {/* &times; = 'x' in HTML - HTML Entities */}
        &times;
      </ModalCloseIcon>
    </ModalContainer>
  </ModalWrapper>
);
