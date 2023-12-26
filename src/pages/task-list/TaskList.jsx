import Header from "../Header";
import styled from "styled-components";
import React, { useCallback, useContext, useEffect } from "react";
import TaskContainer from "./TaskContainer";
import TaskCreator from "../task-creation/TaskCreator";
import TaskContext from "../../state/TaskContext";
import DatabaseContext from "../../state/DatabaseContext";
import { useTaskActions } from "../../api/taskActions";
import AuthenticationContext from "../../state/AuthenticationContext";
import { Navigate } from "react-router-dom";
import CategoryContext from "../../state/CategoryContext";
import { DragDropContext } from "react-beautiful-dnd";

const CategroyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 15px;
  padding: 1rem;
`;

const TaskList = () => {
  const { categories } = useContext(CategoryContext);
  const sortedCategories = categories
    ?.sort((cat1, cat2) => (cat1.order > cat2.order) ? 1 : -1)
    ?.filter((cat) => !cat.hidden);
  const categoriesWithUnknown = [{key: undefined, name: 'Uncategorized'}, ...sortedCategories]

  const { tasks, setTasks, modifyTask } = useContext(TaskContext);
  const { ready, addError } = useContext(DatabaseContext);
  const { listenToTaskList } = useTaskActions();

  const { isLoggedIn, uid } = useContext(AuthenticationContext);

  const handleDragEnd = useCallback((result) => {
    if (!result.destination) return; // Item was dropped outside of a list

    const draggedTask = tasks.find(task => task.key === result.draggableId)
    
    if (draggedTask === undefined) {
      addError("ERR: Task to update category not found.")
      return;
    }

    const newCategory = result.destination.droppableId;
    draggedTask.category = newCategory === "undefined" ? undefined : newCategory;
    modifyTask(draggedTask);
  }, [tasks, addError, modifyTask]);

  // no exhaustive dependency array since it would lead to infinite loop.
  useEffect(() => {
    ready && listenToTaskList(setTasks, uid)
  }, [ready, uid]); // eslint-disable-line

  if (!isLoggedIn()) {
    return <Navigate to="taskhub-fe/login" replace />;
  }

  return (
    <>
      <Header page={"Tasks"}></Header>
      <TaskCreator></TaskCreator>
      <CategroyContainer>
        <DragDropContext onDragEnd={handleDragEnd}>
          {categoriesWithUnknown.map((taskCategory) => (
            <TaskContainer
              key={taskCategory.key || "undefined"}
              categoryId={taskCategory.key || "undefined"}
              taskCategory={taskCategory.name}
              tasks={tasks.filter((task) => task.category === taskCategory.name || task.category === taskCategory.key)}
            />
          ))}
        </DragDropContext>
      </CategroyContainer>
    </>
  );
};

export default TaskList;
