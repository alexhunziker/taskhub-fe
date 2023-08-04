import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  height: 30px;
  border: 2px solid #007799;
  border-radius: 3px;
  background-color: white;

  :disabled {
    background-color: #EEEEEE;
  }

  :focus {
    border: 2px solid #007799;
  }
`;

const Dropdown = ({ entries, onChange, selectedKey, disabled }) => {
  return (
    <StyledSelect onChange={onChange} value={selectedKey} disabled={disabled}>
      {entries.map((entry) => (
        <option key={entry.key || "unknown"} value={entry.key}>{entry.name}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
