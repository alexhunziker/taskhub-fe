import Header from "../Header";
import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import TaskContainer from "./TaskContainer";
import TaskCreator from "../task-creation/TaskCreator";
import TaskContext from "../../state/TaskContext";
import DatabaseContext from "../../state/DatabaseContext";
import { useTaskActions } from "../../api/taskActions";
import AuthenticationContext from "../../state/AuthenticationContext";
import { Navigate } from "react-router-dom";
import CategoryContext from "../../state/CategoryContext";

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

  const { tasks, setTasks } = useContext(TaskContext);
  const { ready } = useContext(DatabaseContext);
  const { listenToTaskList } = useTaskActions();

  const { isLoggedIn, uid } = useContext(AuthenticationContext);

  // eslint-disable-next-line
  useEffect(() => ready && listenToTaskList(setTasks, uid), [ready, uid]);

  if (!isLoggedIn()) {
    return <Navigate to="taskhub-fe/login" replace />;
  }

  return (
    <>
      <Header page={"Tasks"}></Header>
      <TaskCreator></TaskCreator>
      <CategroyContainer>
        {categoriesWithUnknown.map((taskCategory) => (
          <TaskContainer
            key={taskCategory.key || "undefined"}
            taskCategory={taskCategory.name}
            tasks={tasks.filter((task) => task.category === taskCategory.name || task.category === taskCategory.key)}
          />
        ))}
      </CategroyContainer>
    </>
  );
};

export default TaskList;
