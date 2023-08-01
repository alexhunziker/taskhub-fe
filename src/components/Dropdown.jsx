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

const Dropdown = ({ entries, onChange, selectedKey }) => {
  return (
    <StyledSelect onChange={onChange} value={selectedKey}>
      {entries.map((entry) => (
        <option key={entry.key || "unknown"} value={entry.key}>{entry.name}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
