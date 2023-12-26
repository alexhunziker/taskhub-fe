import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import TaskEntry from "./TaskEntry";
import OrderDropdown from "./OrderDropdown";
import { SortOrder, SortOrderFunctions, compareClosedOn } from "./sortOrder";
import { Droppable } from "react-beautiful-dnd";
import { convertBoolean } from "../../utils/booleanUtils";

const ContainerTitle = styled.h2`
  font-size: 14pt;
`

const ClosedTaskToggle = styled.div`
  margin-top: 10px;
  color: #007799;

  ${({ hide }) => hide && `
    opacity: 0;
  `}
`

const CategoryCard = styled(Card)`
  width: 400px;
  flex-grow: 1;
`

const TaskEntriesContainer = styled.div`
  transition: background 0.2s linear,
  background: #ffffff;
  border-radius: 5px;

  ${({ draggedOver }) => draggedOver && `
    background: #e0f5ff;
  `}
`

const TaskContainer = ({ taskCategory, tasks, categoryId }) => {
  const [sortOrder, setSortOrder] = useState(SortOrder.DUE_UNKNOWN_LAST);
  const [showClosed, setShowClosed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sortOrderFunction = SortOrderFunctions[sortOrder];

  const openTasks = tasks
    .filter(t => !t.done)
    .sort((a, b) => sortOrderFunction(a, b));
  const closedTasks = tasks
    .filter(t => t.done)
    .sort((a, b) => compareClosedOn(a, b));

  const toggleClosedText = showClosed
    ? "- Hide closed tasks"
    : "+ Show closed tasks";

  // Hack for react 18, to make sure the Component is mounted
  useEffect(() => setMounted(true), []);

  return (
    <CategoryCard>
      {mounted && <Droppable droppableId={categoryId}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <ContainerTitle>
              <OrderDropdown setSortOrder={setSortOrder} sortOrder={sortOrder} />{" "}
              {taskCategory || "Uncategorized"}
            </ContainerTitle>
            <TaskEntriesContainer draggedOver={convertBoolean(snapshot.isDraggingOver)}>
              {openTasks.length > 0
                ? openTasks.map((task, index) =>
                  <TaskEntry task={task} key={task.key} index={index} hide={snapshot.isDraggingOver} />)
                : "Yay, no tasks"}
              {provided.placeholder}
              {closedTasks.length > 0 && (
                <>
                  <ClosedTaskToggle 
                    onClick={() => setShowClosed(!showClosed)} 
                    hide={convertBoolean(snapshot.isDraggingOver)}
                  >
                    {toggleClosedText}
                  </ClosedTaskToggle>
                  {showClosed &&
                    closedTasks.map((task, index) =>
                      <TaskEntry task={task} key={task.key} index={index} hide={snapshot.isDraggingOver} />)}
                </>
              )}
            </TaskEntriesContainer>
          </div>
        )}
      </Droppable>}
    </CategoryCard>
  );
};

export default TaskContainer;
