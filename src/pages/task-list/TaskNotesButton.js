import React, { useContext } from "react";
import styled from "styled-components";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { convertBoolean } from "../../utils/booleanUtils";
import TaskContext from "../../state/TaskContext";

const NotesIconContainer = styled.div`
  color: #AAAAAA;

  ${({ hasNotes }) => hasNotes && `
    color: #007799;
  `}
`

const TaskNotes = ({ task }) => {
  const {setOverlayTask} = useContext(TaskContext);

  return(
    <NotesIconContainer hasNotes={convertBoolean(!!task.notes)} onClick={() => setOverlayTask(task)}>
      <SpeakerNotesIcon fontSize="small" />
    </NotesIconContainer>
  )
}

export default TaskNotes;