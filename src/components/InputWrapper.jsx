import React from 'react'
import styled from 'styled-components'

const FormFieldContainer = styled.div`
  flex-grow: 1;
  padding-right: 10px;
`

const FormFieldDescription = styled.div`
  font-size: 9pt;
  color: #003333;
`

const InputWrapper = ({description, children}) => {
  return (
    <FormFieldContainer>
      <FormFieldDescription>{description}</FormFieldDescription>
      {children}
    </FormFieldContainer>)
}

export default InputWrapper;