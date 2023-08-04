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
    background: #E0F5FF;
    padding-bottom: 0.6rem;
  `}

  ${({ done }) => done && `
    color: grey;
  `}
`;

const ListEntry = ({overdue, editMode, children, done}) => {
  return <StyledEntry overdue={overdue} editMode={editMode} done={done}>{children}</StyledEntry>;
};

export default ListEntry;