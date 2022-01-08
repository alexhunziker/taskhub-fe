import Header from "./Header";
import React, { useContext } from "react";
import TaskContainer from "./TaskContainer";
import TaskCreator from "./task-creation/TaskCreator";
import Card from "../components/Card";
import { Categories } from "../state/constants";
import TaskContext from "../state/TaskContext";

const TaskList = () => {
  const taskCategories = Categories;

  const { tasks }= useContext(TaskContext);

  return (
    <Card>
      <Header></Header>
      <TaskCreator></TaskCreator>
        {
          taskCategories.map((taskCategory) => (
            <TaskContainer
              key={taskCategory}
              taskCategory={taskCategory}
              tasks={tasks.filter((task) => task.category === taskCategory)}
            />
          ))
        }
    </Card>
  );
};

export default TaskList;
