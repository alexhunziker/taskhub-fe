import Header from "../Header";
import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import TaskContainer from "./TaskContainer";
import TaskCreator from "../task-creation/TaskCreator";
import { Categories } from "../../state/constants";
import TaskContext from "../../state/TaskContext";
import DatabaseContext from "../../state/DatabaseContext";
import { useTaskActions } from "../../api/taskActions";
import AuthenticationContext from "../../state/AuthenticationContext";
import { Navigate } from "react-router-dom";

const CategroyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 15px;
  padding: 1rem;
`;

const TaskList = () => {
  const taskCategories = Categories;

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
        {taskCategories.map((taskCategory) => (
          <TaskContainer
            key={taskCategory || "unknown"}
            taskCategory={taskCategory}
            tasks={tasks.filter((task) => task.category === taskCategory)}
          />
        ))}
      </CategroyContainer>
    </>
  );
};

export default TaskList;
