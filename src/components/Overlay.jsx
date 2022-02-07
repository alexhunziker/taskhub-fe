import React from "react";
import styled from "styled-components";

const Shadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

const StyledOverlay = styled.div`
  position: fixed;
  top: 60px;
  bottom: 60px;
  right: 60px;
  left: 60px;
  background-color: #FFFFFF;
  z-index: 3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  padding: 0px 20px;
  overflow: auto;
`

const Overlay = (props) => {
  const { children } = props;

  return (
    <Shadow>
      <StyledOverlay>
        {children}
      </StyledOverlay>
    </Shadow>
  );
} 

export default Overlay;