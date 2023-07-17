import { set, ref, getDatabase, get } from "firebase/database";
import { useContext, useState } from "react";
import DatabaseContext from "../state/DatabaseContext";

export const useTaskActions = () => {
  const { addError, indicateSuccess, ready } = useContext(DatabaseContext);
  const [alreadyRetrieved, setAlreadyRetrieved] = useState(false);

  const listenToTaskList = (successAction, uid) => {
    if (!ready) {
      addError("Getting taks failed: Database not ready.");
      return;
    }

    if (alreadyRetrieved) {
      addError("WARN: Prevented from listening to tasklist multiple times.");
      return;
    }
    setAlreadyRetrieved(true);

    const database = getDatabase();
    const taskListRef = ref(database, "tasks/" + uid);

    get(taskListRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          console.warn("No tasks were obtained by firebase.");
          return;
        } 

        const tasklist = Object.values(snapshot.val());
        const tasklist_1 = tasklist.map(task => ({
          ...task, 
          due: task.due && new Date(task.due), 
          closedOn: task.closedOn && new Date(task.closedOn)}))
          
        successAction(tasklist_1);
        indicateSuccess()
      },
      (error) => addError("Getting tasks failed: " + error)
    );
  };

  const updateTask = async (task, uid) => {
    if (!ready) {
      addError("Task update/creation failed: Database not ready.");
      return;
    }

    const taskToPersist = { 
      ...task, 
      due: task.due && task.due.getTime(), 
      closedOn: task.closedOn && task.closedOn.getTime() };

    Object.keys(taskToPersist).forEach(
      (key) => taskToPersist[key] === undefined && delete taskToPersist[key]
    );

    const database = getDatabase();
    const objectReference = ref(database, `tasks/${uid}/${taskToPersist.key}`);
    set(objectReference, taskToPersist)
      .then(indicateSuccess())
      .catch((error) => addError("Task update/creation failed: " + error));
  };

  const removeTask = async (taskKey, uid) => {

    const database = getDatabase();
    const objectReference = ref(database, `tasks/${uid}/${taskKey}`);
    set(objectReference, null)
      .then(indicateSuccess())
      .catch((error) => addError("Task removal failed: " + error));
  }

  return {
    listenToTaskList,
    updateTask,
    removeTask,
  };

};
