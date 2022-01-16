import { set, ref, onValue, getDatabase } from "firebase/database";
import { useContext, useState } from "react";
import DatabaseContext from "../state/DatabaseContext";

export const useTaskActions = () => {
  const { addError, indicateSuccess, ready } = useContext(DatabaseContext);
  const [alreadyRetrieved, setAlreadyRetrieved] = useState(false);

  const listenToTaskList = (successAction) => {
    if (!ready) {
      addError("Getting taks failed: Database not ready.");
      setTimeout(() => listenToTaskList(), 10000);
      return;
    }

    if (alreadyRetrieved) {
      addError("WARN: Prevented from listening to tasklist multiple times.");
      return;
    }
    setAlreadyRetrieved(true);

    const database = getDatabase();
    const taskListRef = ref(database, "tasks/test-user");

    onValue(
      taskListRef,
      (snapshot) => {
        const tasklist = Object.values(snapshot.val());
        const tasklist_1 = tasklist.map(task => ({...task, due: task.due && new Date(task.due)}))
        successAction(tasklist_1);
        console.log(tasklist_1, "retrieved");
        indicateSuccess()
      },
      (error) => addError("Getting tasks failed: " + error)
    );
  };

  const updateTask = async (task) => {
    if (!ready) {
      addError("Task update/creation failed: Database not ready.");
      return;
    }

    const taskToPersist = { ...task, due: task.due && task.due.getTime() };
    console.log(taskToPersist);

    Object.keys(taskToPersist).forEach(
      (key) => taskToPersist[key] === undefined && delete taskToPersist[key]
    );

    const database = getDatabase();
    set(ref(database, "tasks/test-user/" + taskToPersist.key), taskToPersist)
      .then(indicateSuccess())
      .catch((error) => addError("Task update/creation failed: " + error));
  };

  return {
    listenToTaskList,
    updateTask,
  };
};
