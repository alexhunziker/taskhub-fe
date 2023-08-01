import React from "react";
import styled from "styled-components";

import InputWrapper from "../../components/InputWrapper";
import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/DatePicker";
import { Priorities } from "../../state/constants";
import { useContext } from "react";
import CategoryContext from "../../state/CategoryContext";

const Row = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const AdvancedTaskFields = ({category, setCategory, due, setDue, priority, setPriority}) => {

  const { categories } = useContext(CategoryContext);
  const sortedCategories = categories?.sort((cat1, cat2) => cat1.name.toUpperCase() > cat2.name.toUpperCase());
  const categoriesWithUnknown = [{key: undefined, name: 'Uncategorized'}, ...sortedCategories]

  const currentDue = due instanceof Date ? due : undefined;

  const priorityEntries = Priorities.map(priority => {return {'key': priority, 'name': priority}})

  return (
    <Row>
      <InputWrapper description={"Category"}>
        <Dropdown
          entries={categoriesWithUnknown}
          selectedKey={category}
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
          entries={priorityEntries}
          selectedKey={priority}
          onChange={(event) =>
            setPriority(event.target.options[event.target.selectedIndex].value)
          }
        />
      </InputWrapper>
    </Row>
  );
};

export default AdvancedTaskFields;
