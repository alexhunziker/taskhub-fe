import Header from "../Header";
import React, { useContext, useEffect } from "react";
import TaskContainer from "./TaskContainer";
import TaskCreator from "../task-creation/TaskCreator";
import Card from "../../components/Card";
import { Categories } from "../../state/constants";
import TaskContext from "../../state/TaskContext";
import DatabaseContext from "../../state/DatabaseContext";
import { useTaskActions } from "../../api/taskActions";

const TaskList = () => {
  const taskCategories = Categories;

  const { tasks, setTasks }= useContext(TaskContext);
  const { ready } = useContext(DatabaseContext);
  const { listenToTaskList } = useTaskActions();

  // eslint-disable-next-line
  useEffect(() => ready && listenToTaskList(setTasks), [ready])

  return (
    <Card>
      <Header></Header>
      <TaskCreator></TaskCreator>
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
