import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TaskList from "./pages/task-list/TaskList";
import CategoryManager from "./pages/categories/CategoryManager";
import Login from "./pages/auth/Login";
import { TaskContextProvider } from "./state/TaskContext";
import { DatabaseContextPorvider } from "./state/DatabaseContext";
import { AuthenticationContextPorvider } from "./state/AuthenticationContext";

function App() {
  return (
    <DatabaseContextPorvider>
      <AuthenticationContextPorvider>
      <TaskContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />}>
              
              <Route intex element={<h1>foo</h1>} />
            </Route>
            <Route path="/categories" element={<CategoryManager />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
      </AuthenticationContextPorvider>
    </DatabaseContextPorvider>
  );
}

export default App;
