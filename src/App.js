import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TaskList from "./pages/task-list/TaskList";
import CategoryManager from "./pages/categories/CategoryManager";
import Login from "./pages/auth/Login";
import { TaskContextProvider } from "./state/TaskContext";
import { DatabaseContextPorvider } from "./state/DatabaseContext";
import { AuthenticationContextPorvider } from "./state/AuthenticationContext";
import { CategoryContextProvicer } from "./state/CategoryContext";

function App() {

  return (
    <DatabaseContextPorvider>
      <AuthenticationContextPorvider>
      <TaskContextProvider>
      <CategoryContextProvicer>
        <BrowserRouter>
          <Routes>
            <Route path="/taskhub-fe/categories" element={<CategoryManager />} />
            <Route path="/taskhub-fe/login" element={<Login />} />
            <Route path="*" element={<TaskList />} />
          </Routes>
        </BrowserRouter>
      </CategoryContextProvicer>
      </TaskContextProvider>
      </AuthenticationContextPorvider>
    </DatabaseContextPorvider>
  );
}

export default App;
