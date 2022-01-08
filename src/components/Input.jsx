import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 24px;
  border: 2px solid #009999;
  border-radius: 3px;

  :focus {
    border: 2px solid #009999;
  }
`

const Input = ({onChange, value}) => {
  return <StyledInput onChange={onChange} value={value}/>
}

export default Input