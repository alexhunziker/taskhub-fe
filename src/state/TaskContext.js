import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { mockTasks } from "./mockTasks";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (taskKey) => {},
  toggleResolved: (taskKey) => {},
  modifyTask: (task) => {},
});

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState(mockTasks);

  const addTask = (newTask) =>
    setTasks([...tasks, { ...newTask, key: uuidv4() }]);

  const removeTask = (taskKey) =>
    setTasks(tasks.filter((task) => task.key !== taskKey));

  const toggleResolved = (taskKey) => {
    setTasks(
      tasks.map((task) =>
        task.key === taskKey ? { ...task, done: !task.done } : task
      )
    );
  };

  const modifyTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.key !== updatedTask.key ? task : updatedTask))
    );

  const value = {
    tasks,
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
