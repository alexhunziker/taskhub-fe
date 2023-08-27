import React from 'react';
import styled from 'styled-components'

const StyledEntry = styled.div`
  padding: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 10px;
  opacity: 1;

  transform: translateY(0%);
  transition: opacity 0.5s, transform 0.5s ease-in;

  ${({ overdue }) => overdue && `
    background: #FFDDDD;
  `}

  ${({ editMode }) => editMode && `
    background: #E0F5FF;
    padding-bottom: 0.6rem;
    position: relative;
    z-index: 99;
  `}

  ${({ done }) => done && `
    color: grey;
  `}

  ${({ remove }) => remove && `
    opacity: 0;
    transform: translateY(100%);
  `}

  ${({ remove, done }) => remove && done && `
    transform: translateY(-100%);
  `}
`;

const ListEntry = ({overdue, editMode, children, done, remove}) => {
  return <StyledEntry overdue={overdue} editMode={editMode} done={done} remove={remove}>{children}</StyledEntry>;
};

export default ListEntry;