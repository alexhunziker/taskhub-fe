import React, { useContext, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import InputWrapper from "../../components/InputWrapper";
import AdvancedTaskFields from "./AdvancedTaskFields";
import { Priority } from "../../state/constants";
import TaskContext from "../../state/TaskContext";

const TaskCreatorCard = styled(Card)`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0px;
`

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const TaskCreator = () => {
  const [advanced, setAdvanced] = useState(() => false);

  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(undefined);
  const [priority, setPriority] = useState(Priority.MEDIUM);
  const [due, setDue] = useState(undefined);
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const submit = () => {
    const newTask = { title, category, due, priority };

    if (!valid) {
      setTouched(true)
      return;
    }

    addTask(newTask);

    setTitle("");
    setCategory(undefined);
    setPriority(Priority.MEDIUM);
    setValid(false)
    setTouched(false)
  };

  const handleTitleChanged = (event) => {
    setTitle(event.target.value)
    setValid(!!event.target.value)
    setTouched(true)
  }

  return (
    <TaskCreatorCard>
      <Row>
        <InputWrapper description={"New Task"}>
          <Input
            value={title}
            name={"title"}
            validationError={!valid && touched}
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
      <Row>
        {advanced && (
          <AdvancedTaskFields
            category={category}
            setCategory={setCategory}
            due={due}
            setDue={setDue}
            priority={priority}
            setPriority={setPriority}
          />
        )}
      </Row>
    </TaskCreatorCard>
  );
};

export default TaskCreator;
