import React, { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import InputWrapper from "../../components/InputWrapper";
import AdvancedTaskFields from "./AdvancedTaskFields";
import { Priority, RecurrenceMode } from "../../state/constants";
import TaskContext from "../../state/TaskContext";
import CategoryContext from "../../state/CategoryContext";
import { convertBoolean } from "../../utils/booleanUtils";

const TaskCreatorCard = styled(Card)`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0px;
  background-color: #e0f5ff;
  max-height: 50px;
  transition: max-height 0.3s linear;
  height: fit-content;
  overflow: hidden;

  ${({ advanced }) => (advanced ? `max-height: 200px;` : `max-height: 50px;`)}
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const AdvancedRow = styled(Row)`
  transition: opacity 0.3s linear;
  ${({ advanced }) => (advanced ? `opacity: 1;` : `opacity: 0;`)}
`;

const TASK_CREATION_INPUT_ID = "tcrtin";

const TaskCreator = () => {
  const [advanced, setAdvanced] = useState(() => false);

  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(undefined);
  const [priority, setPriority] = useState(Priority.MEDIUM);
  const [due, setDue] = useState(undefined);
  const [recurring, setRecurring] = useState({});
  const [titleValid, setTitleValid] = useState(false);
  const [recurrenceValid, setRecurrenceValid] = useState(true);
  const [touched, setTouched] = useState(false);

  const { categories } = useContext(CategoryContext);
  const categoriesRegex = useMemo(
    () =>
      categories
        .flatMap((category) => {
          const patterns = category.rules?.map((rule) => new RegExp(rule));
          return patterns?.map((pattern) => {
            return { pattern, category: category.key };
          });
        })
        .filter((o) => !!o),
    [categories]
  );

  const handleSetRecurring = (newRecurring) => {
    const valid = newRecurring.mode !== RecurrenceMode.AFTER_DUE || !!due;
    setRecurrenceValid(valid);
    setRecurring({ ...newRecurring, invalid: !valid });
  };

  const handleSetDue = (newDue) => {
    const valid = recurring.mode !== RecurrenceMode.AFTER_DUE || !!newDue;
    setRecurrenceValid(valid);
    setDue(newDue);
    setRecurring({ ...recurring, invalid: !valid });
  };

  const submit = () => {
    const newTask = {
      title,
      category,
      due,
      priority,
      recurrenceMode: recurring.mode,
      recurrenceFrequency: recurring.frequency,
    };

    handleSetRecurring(recurring);
    if (!titleValid || !recurrenceValid) {
      setTouched(true);
      return;
    }

    addTask(newTask);

    setTitle("");
    setCategory(undefined);
    setPriority(Priority.MEDIUM);
    setTitleValid(false);
    setTouched(false);
    setRecurring({});
  };

  useEffect(() => {
    const enterListener = event => {
      if (document.activeElement.id === TASK_CREATION_INPUT_ID && (event.code === "Enter" || event.code === "NumpadEnter")) {
        event.preventDefault();
        submit();
      }
    }

    document.addEventListener("keydown", enterListener);
    return () => document.removeEventListener("keydown", enterListener);
  }, [submit])

  const handleTitleChanged = (event) => {
    const currentTitle = event.target.value;
    setTitle(currentTitle);
    setTitleValid(!!currentTitle);
    setTouched(true);

    if (category === undefined) {
      const matchedExpression = categoriesRegex.find((catEx) =>
        catEx.pattern.test(currentTitle)
      );
      setCategory(matchedExpression?.category);
    }
  };

  return (
    <TaskCreatorCard advanced={convertBoolean(advanced)}>
      <Row>
        <InputWrapper description={"New Task"}>
          <Input
            id={TASK_CREATION_INPUT_ID}
            value={title}
            name={"title"}
            validationError={!titleValid && touched}
            onChange={(event) => handleTitleChanged(event)}
          />
        </InputWrapper>
        <StyledButton onClick={() => setAdvanced(!advanced)}>
          {!advanced ? "➕" : "➖"}
        </StyledButton>
        <StyledButton onClick={() => submit()} primary>
          Create
        </StyledButton>
      </Row>
      <AdvancedRow advanced={convertBoolean(advanced)}>
        <AdvancedTaskFields
          category={category}
          setCategory={setCategory}
          due={due}
          setDue={handleSetDue}
          priority={priority}
          setPriority={setPriority}
          recurring={recurring}
          setRecurring={handleSetRecurring}
        />
      </AdvancedRow>
    </TaskCreatorCard>
  );
};

export default TaskCreator;
