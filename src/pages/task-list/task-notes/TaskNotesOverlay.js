import React, { useContext, useState } from "react";
import styled from "styled-components";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskContext from "../../../state/TaskContext";
import { convertBoolean } from "../../../utils/booleanUtils";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

const Overlay = styled.div`
  position: fixed;
  opacity: 0.0;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  height: 100%,
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  transition: opacity 0.2s linear;
  visibility: hidden;

  ${({ isShown }) => isShown && `
    opacity: 1;
    visibility: visible;
  `}
`

const TaskCard = styled.div`
  position: fixed;
  top: 10%;
  bottom: 10%;
  right: 10%;
  left: 10%;
  background-color: #FFFFFF;
  z-index: 3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  padding: 0px 20px;
  overflow: auto;
`

const NewNoteLine = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledNote = styled.div`
  flex-grow: 1;
`;

const RemoveNote = styled.div`
  color: #007799;
`;

const TaskNotesOverlay = () => {
  const { overlayTask, setOverlayTask, modifyTask } = useContext(TaskContext);

  const [newNoteText, setNewNoteText] = useState("");
  const [validationError, setValidationError] = useState(false);

  const addNote = () => {
    if (newNoteText === "") {
      setValidationError(true);
      return;
    }

    const newNotes = overlayTask.notes ? [...overlayTask.notes, newNoteText] : [newNoteText]
    overlayTask.notes = newNotes;
    modifyTask(overlayTask);
    setNewNoteText("");
  }

  const handleInputTextChange = (event) => {
    setValidationError(false);
    setNewNoteText(event.target.value)
  }

  const handleDeleteNote = (index) => {
    overlayTask.notes.splice(index, 1);
    modifyTask(overlayTask);
  }

  return <Overlay isShown={convertBoolean(!!overlayTask)} onClick={() => setOverlayTask(undefined)}>
    {overlayTask && <TaskCard onClick={(event) => { event.stopPropagation() }}>
      <h2>{overlayTask.title}</h2>
      {overlayTask.notes?.map((note, index) => (
        <Card>
          <Row>
            <StyledNote>{note}</StyledNote>
            <RemoveNote onClick={() => handleDeleteNote(index)}><DeleteOutlineIcon /></RemoveNote>
          </Row>
        </Card>)
      )}
      <NewNoteLine>
        <Input validationError={validationError} value={newNoteText} onChange={(event) => handleInputTextChange(event)}/>
          <Button primary onClick={() => addNote()}>Add</Button>
      </NewNoteLine>
    </TaskCard>}
    </Overlay>
}

export default TaskNotesOverlay;