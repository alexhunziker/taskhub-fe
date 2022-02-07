import React from 'react'
import styled from 'styled-components';

const StyledRule = styled.span`
  border: 1px solid;
  border-color: #006666;
  background-color: #DFFFF5;
  color: #006666;
  margin: 0px 3px;
  padding: 0px 2px;
  border-radius: 3px;
  white-space:nowrap;

  ${({ editMode }) => editMode || `
    font-size: smaller;
  `}
`;

const DeleteArea = styled.span`
  border: 1px solid;
  border-color: #006666;
  border-radius: 3px;
  margin-right: -3px;
  margin-left: 3px;
  padding: 0px 5px;
  background-color: #FFDDDD;
  color: #CC8888;  
`;

const CategoryRule = ({rule, handleRemoval, editMode}) => {
  return (
    <StyledRule editMode={editMode}>
      {rule}
      {editMode && <DeleteArea onClick={() => handleRemoval(rule)}>X</DeleteArea>}
    </StyledRule>
  )
}

export default CategoryRule;