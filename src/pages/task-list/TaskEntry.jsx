import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';
import { Draggable } from "react-beautiful-dnd";
import Button from "../../components/Button";
import ListEntry from "../../components/ListEntry";
import EditTask from "./EditTask";
import { Priority } from "../../state/constants";
import TaskContext from "../../state/TaskContext";
import TaskNotes from "./TaskNotesButton";

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
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }
}

const TaskEntry = ({ task, index, hide }) => {
  const { toggleResolved } = useContext(TaskContext);
  const [remove, setRemove] = useState(false);

  const currentDate = new Date();
  const overdue =
    task.due && typeof task.due.getTime === "function"
      ? currentDate > task.due.getTime() && !task.done
      : false;

  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);

  const formattedDate = task.done ? formatDate(task.closedOn) : formatDate(task.due)

  const handleToggle = useCallback(() => {
    setTimeout(() => toggleResolved(task.key), 500);
    setRemove(true);
  }, [setRemove, task.key, toggleResolved])

  return (
    <Draggable key={task.key} draggableId={task.key} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListEntry
            overdue={overdue}
            editMode={editMode}
            done={task.done}
            remove={remove}
            hide={hide && !snapshot.isDragging}
          >
            {!editMode ? (
              <Row>
                <Checkbox type="checkbox" onChange={() => handleToggle()} checked={task.done || remove} />
                <Importance priority={task.priority}>!</Importance>
                <StyledDescription done={task.done}>{task.title} {formattedDate && `(${formattedDate})`}</StyledDescription>
                <TaskNotes task={task} />
                <Button onClick={() => toggleEditMode()}>
                  <EditIcon fontSize="small" />
                </Button>
              </Row>
            ) : (
              <EditTask task={task} toggleEditMode={toggleEditMode} />
            )}
          </ListEntry>
        </div>
      )}
    </Draggable>
  );
};

export default TaskEntry;
