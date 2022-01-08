import React from "react";
import "./App.css";
import TaskList from "./pages/TaskList";
import {TaskContextProvider} from "./state/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
}

export default App;
