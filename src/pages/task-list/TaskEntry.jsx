import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import ListEntry from "../../components/ListEntry";
import EditTask from "./EditTask";
import { Priority } from "../../state/constants";
import TaskContext from "../../state/TaskContext";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  height: 17px;
`;

const StyledDescription = styled.div`
  flex-grow: 1;

  ${({ done }) =>
    done &&
    `
    text-decoration: line-through;
  `}
`;

const Importance = styled.div`
  font-weight: bold;

  ${({ priority }) =>
    priority === Priority.HIGH &&
    `
    color: red;
  `}

  ${({ priority }) =>
    priority === Priority.MEDIUM &&
    `
    color: orange;
  `}

  ${({ priority }) =>
    priority === Priority.LOW &&
    `
    color: green;
  `}
`;

const formatDate = (date) => {
  if (date instanceof Date) {
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }
}

const TaskEntry = ({ task }) => {
  const { removeTask, toggleResolved } = useContext(TaskContext);

  const currentDate = new Date();
  const overdue =
    task.due && typeof task.due.getTime === "function"
      ? currentDate > task.due.getTime() && !task.done
      : false;

  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);

  const formattedDate = formatDate(task.due)

  return (
    <ListEntry overdue={overdue} editMode={editMode} done={task.done}>
      {!editMode ? (
        <Row>
          <Checkbox type="checkbox" onClick={() => toggleResolved(task.key)} />
          <Importance priority={task.priority}>!</Importance>
          <StyledDescription done={task.done}>{task.title} {formattedDate && `(${formattedDate})`}</StyledDescription>
          <Button onClick={() => toggleEditMode()}>Edit</Button>
          <Button onClick={() => removeTask(task.key)}>Delete</Button>
        </Row>
      ) : (
        <EditTask task={task} toggleEditMode={toggleEditMode} />
      )}
    </ListEntry>
  );
};

export default TaskEntry;
