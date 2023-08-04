import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 24px;
  border: 2px solid #007799;
  border-radius: 3px;

  :focus {
    border: 2px solid #007799;
  }

  ${({ validationError }) => validationError && `
    border: 2px solid #AA6666;
    background-color: #FFDDDD;
  `}
`

const Input = ({onChange, value, validationError}) => {
  return <StyledInput onChange={onChange} value={value} validationError={validationError}/>
}

export default Input