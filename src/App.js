import React from "react";
import TaskList from "./pages/task-list/TaskList";
import { TaskContextProvider } from "./state/TaskContext";
import { DatabaseContextPorvider } from "./state/DatabaseContext";

function App() {
  return (
    <DatabaseContextPorvider>
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </DatabaseContextPorvider>
  );
}

export default App;
