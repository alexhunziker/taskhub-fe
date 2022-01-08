import React from "react";
import styled from "styled-components";

import InputWrapper from "../../components/InputWrapper";
import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/DatePicker";
import { Categories, Priorities } from "../../state/constants";

const Row = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const AdvancedTaskFields = ({category, setCategory, due, setDue, priority, setPriority}) => {

  const currentDue = due instanceof Date ? due : undefined;

  return (
    <Row>
      <InputWrapper description={"Category"}>
        <Dropdown
          entries={Categories}
          value={category}
          onChange={(event) =>
            setCategory(event.target.options[event.target.selectedIndex].value)
          }
        />
      </InputWrapper>
      <InputWrapper description={"Due"}>
        <DatePicker
          selected={currentDue}
          onChange={(date) => setDue(date)}
          dateFormat="dd.MM.yyyy"
        />
      </InputWrapper>
      <InputWrapper name={"priority"} description={"Priority"}>
        <Dropdown
          entries={Priorities}
          value={priority}
          onChange={(event) =>
            setPriority(event.target.options[event.target.selectedIndex].value)
          }
        />
      </InputWrapper>
    </Row>
  );
};

export default AdvancedTaskFields;
