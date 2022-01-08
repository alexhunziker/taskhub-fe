import React from 'react';
import styled from 'styled-components'

const StyledEntry = styled.div`
    padding: 0.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin-top: 10px;

  ${({ overdue }) => overdue && `
    background: #FFDDDD;
  `}

  ${({ editMode }) => editMode && `
    background: #DFFFF5;
    padding-bottom: 0.6rem;
  `}
`;

const ListEntry = ({overdue, editMode, children}) => {
  return <StyledEntry overdue={overdue} editMode={editMode}>{children}</StyledEntry>;
};

export default ListEntry;