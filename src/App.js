import React from "react";
import "./App.css";
import TaskList from "./pages/task-list/TaskList";
import {TaskContextProvider} from "./state/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
}

export default App;
