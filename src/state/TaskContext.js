import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { mockTasks } from "./mockTasks";
import { useTaskActions} from "../api/taskActions"

const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (taskKey) => {},
  toggleResolved: (taskKey) => {},
  modifyTask: (task) => {},
});

export const TaskContextProvider = (props) => {
  
  const [tasks, setTasks] = useState(mockTasks);
  const {updateTask} = useTaskActions()

  const addTask = (newTask) => {
    const newTaskWithKey = { ...newTask, key: uuidv4() };
    setTasks([...tasks, newTaskWithKey]);
    updateTask(newTaskWithKey);
  }
    
  const removeTask = (taskKey) =>
    setTasks(tasks.filter((task) => task.key !== taskKey));

  const toggleResolved = (taskKey) => {
    const taskToUpdate = tasks.find((task) => task.key === taskKey)
    taskToUpdate["done"] = !taskToUpdate.done;

    setTasks(
      tasks.map((task) =>
        task.key === taskKey ? taskToUpdate : task
      )
    );
    updateTask(taskToUpdate)
  };

  const modifyTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.key !== updatedTask.key ? task : updatedTask))
    );
    updateTask(updatedTask)
  }
    

  const value = {
    tasks,
    setTasks,
    addTask,
    removeTask,
    toggleResolved,
    modifyTask,
  };

  console.log(value)

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContext;
