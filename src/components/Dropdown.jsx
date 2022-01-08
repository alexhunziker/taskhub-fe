import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  height: 24px;
  border: 2px solid #009999;
  border-radius: 3px;

  :focus {
    border: 2px solid #009999;
  }
`;

const Dropdown = ({ entries, onChange, value }) => {
  return (
    <StyledSelect onChange={onChange} value={value}>
      {entries.map((entry) => (
        <option value={entry} key={entry}>{entry}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
