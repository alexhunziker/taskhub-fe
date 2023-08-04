import React, { useState } from "react";
import styled from "styled-components";

import InputWrapper from "../../components/InputWrapper";
import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/DatePicker";
import {
  Priorities,
  Frequencies,
  RecurrenceModes,
  RecurrenceMode,
  Frequency,
} from "../../state/constants";
import { useContext } from "react";
import CategoryContext from "../../state/CategoryContext";

const Row = styled.div`
  margin-top: 7px;
  display: flex;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`;

const RecurringSection = styled.div`
  display: flex;
  gap: 10px;
  min-width: 300px;
`;

const Checkbox = styled.input`
  height: 17px;
`;

const AdvancedTaskFields = ({
  category,
  setCategory,
  due,
  setDue,
  priority,
  setPriority,
  recurring,
  setRecurring,
}) => {
  const { categories } = useContext(CategoryContext);
  const sortedCategories = categories?.sort(
    (cat1, cat2) => cat1.name.toUpperCase() > cat2.name.toUpperCase()
  );
  const categoriesWithUnknown = [
    { key: undefined, name: "Uncategorized" },
    ...sortedCategories,
  ];

  const currentDue = due instanceof Date ? due : undefined;

  const [isRecurring, setIsRecurring] = useState(!!recurring.frequency);
  const toggleRecurring = () => {
    const newRecurring = isRecurring ? {} : {mode: RecurrenceMode.AFTER_COMPLETE, frequency: Frequency.WEEKLY}
    setRecurring(newRecurring);
    setIsRecurring(!isRecurring);
  };

  const priorityEntries = Priorities.map((priority) => {
    return { key: priority, name: priority };
  });

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
      <>
        <InputWrapper description={"Recurring"}>
          <RecurringSection>
            <Checkbox
              type="checkbox"
              onChange={() => toggleRecurring()}
              checked={isRecurring}
            />
            <Dropdown
              disabled={!isRecurring}
              entries={isRecurring ? Frequencies : []}
              selectedKey={recurring.frequency}
              onChange={(event) =>
                setRecurring({
                  ...recurring,
                  frequency:
                    event.target.options[event.target.selectedIndex].value,
                })
              }
            />
            <Dropdown
              disabled={!isRecurring}
              entries={isRecurring ? RecurrenceModes : []}
              selectedKey={recurring.mode}
              onChange={(event) =>
                setRecurring({
                  ...recurring,
                  mode: event.target.options[event.target.selectedIndex].value,
                })
              }
            />
          </RecurringSection>
        </InputWrapper>
      </>
    </Row>
  );
};

export default AdvancedTaskFields;
