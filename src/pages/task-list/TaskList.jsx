import Header from "../Header";
import React, { useCallback, useContext, useEffect } from "react";
import TaskContainer from "./TaskContainer";
import TaskCreator from "../task-creation/TaskCreator";
import Card from "../../components/Card";
import { Categories } from "../../state/constants";
import TaskContext from "../../state/TaskContext";
import { useTaskActions } from "../../api/taskActions";
import Button from "../../components/Button";

const TaskList = () => {
  const taskCategories = Categories;

  const { tasks, setTasks }= useContext(TaskContext);
  const { listenToTaskList } = useTaskActions();

  const loadTasks = () => listenToTaskList(setTasks);

  return (
    <Card>
      <Header></Header>
      <TaskCreator></TaskCreator>
      <Button onClick={() => loadTasks()}>LoadTasks</Button>
        {
          taskCategories.map((taskCategory) => (
            <TaskContainer
              key={taskCategory || "unknown"}
              taskCategory={taskCategory}
              tasks={tasks.filter((task) => task.category === taskCategory)}
            />
          ))
        }
    </Card>
  );
};

export default TaskList;
