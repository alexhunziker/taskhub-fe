import React, { useContext, useState } from "react";
import styled from "styled-components";

import Input from "../../components/Input";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import AdvancedTaskFields from "../task-creation/AdvancedTaskFields";
import TaskContext from "../../state/TaskContext";

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const EditTask = ({ task, toggleEditMode }) => {
  
  
  const [title, setTitle] = useState(task.title);
  const [category, setCategory] = useState(task.category);
  const [due, setDue] = useState(task.due)
  const [priority, setPriority] = useState(task.priority)
  const [recurring, setRecurring] = useState({mode: task.recurrenceMode, frequency: task.recurrenceFrequency})

  const {removeTask, modifyTask} = useContext(TaskContext)

  const submit = () => {
    modifyTask({...task, title, category, due, priority, recurrenceMode: recurring.mode, recurrenceFrequency: recurring.frequency})
    toggleEditMode();
  };

  return (
    <>
      <Row>
        <InputWrapper description={"Task"}>
          <Input
            value={title}
            name={"title"}
            onChange={(event) => setTitle(event.target.value)}
          />
        </InputWrapper>
        <StyledButton onClick={() => submit()} primary>
          Save
        </StyledButton>
        <StyledButton onClick={() => removeTask(task.key)}>Delete</StyledButton>
      </Row>
      <AdvancedTaskFields
        category={category}
        setCategory={setCategory}
        due={due}
        setDue={setDue}
        priority={priority}
        setPriority={setPriority}
        recurring={recurring}
        setRecurring={setRecurring}
      />
    </>
  );
};

export default EditTask;
