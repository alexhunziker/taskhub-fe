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
            <Route path="/categories" element={<CategoryManager />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<TaskList />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
      </AuthenticationContextPorvider>
    </DatabaseContextPorvider>
  );
}

export default App;
