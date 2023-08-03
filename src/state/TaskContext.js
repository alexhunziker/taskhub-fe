import React, {useContext, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { useTaskActions} from "../api/taskActions"
import AuthenticationContext from "./AuthenticationContext";
import { Frequency, RecurrenceMode } from "./constants";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (taskKey) => {},
  toggleResolved: (taskKey) => {},
  modifyTask: (task) => {},
});

export const TaskContextProvider = (props) => {

  const { uid } = useContext(AuthenticationContext)  
  const [tasks, setTasks] = useState([]);
  const {updateTask, removeTask: deleteTask} = useTaskActions()

  const addTask = (newTask) => {
    const newTaskWithKey = { ...newTask, key: uuidv4() };
    setTasks([...tasks, newTaskWithKey]);
    updateTask(newTaskWithKey, uid);
  }
    
  const removeTask = (taskKey) => {
    setTasks(tasks.filter((task) => task.key !== taskKey));
    deleteTask(taskKey, uid)
  }

  const toggleResolved = (taskKey) => {
    const taskToUpdate = tasks.find((task) => task.key === taskKey)
    taskToUpdate.done = !taskToUpdate.done;

    taskToUpdate.closedOn = taskToUpdate.done ? new Date() : null;

    setTasks(
      tasks.map((task) =>
        task.key === taskKey ? taskToUpdate : task
      )
    );
    updateTask(taskToUpdate, uid)

    const recurrenceMode = taskToUpdate.recurrenceMode;
    if (recurrenceMode && taskToUpdate.done) {

      const newDueDate = taskToUpdate.recurrenceMode === RecurrenceMode.AFTER_COMPLETE 
        ? new Date() 
        : new Date(taskToUpdate.due.getTime());

      const frequency = taskToUpdate.recurrenceFrequency;
      if (frequency === Frequency.DAILY) {
        newDueDate.setDate(newDueDate.getDate() + 1);
      } else if (frequency === Frequency.WEEKLY) {
        newDueDate.setDate(newDueDate.getDate() + 7);
      } else if (frequency === Frequency.MONTHLY) {
        newDueDate.setMonth(newDueDate.getMonth() + 1);
      } else if (frequency === Frequency.YEARLY) {
        newDueDate.setFullYear(newDueDate.getFullYear() + 1);
      }

      const newTask = {...taskToUpdate, due: newDueDate, done: false, closedOn: undefined}
      addTask(newTask);
    }
  };

  const modifyTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.key !== updatedTask.key ? task : updatedTask))
    );
    updateTask(updatedTask, uid)
  }
    

  const value = {
    tasks,
    setTasks,
    addTask,
    removeTask,
    toggleResolved,
    modifyTask,
  };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContext;
