import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TaskList from "./pages/task-list/TaskList";
import CategoryManager from "./pages/categories/CategoryManager";
import { TaskContextProvider } from "./state/TaskContext";
import { DatabaseContextPorvider } from "./state/DatabaseContext";

function App() {
  return (
    <DatabaseContextPorvider>
      <TaskContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />}>
              
              <Route intex element={<h1>foo</h1>} />
            </Route>
            <Route path="/categories" element={<CategoryManager />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </DatabaseContextPorvider>
  );
}

export default App;
