import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import your route components (replace these with your actual components).
import Home from "../../pages/Home";
import Planner from "../../pages/Planner";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/planner",
    element: <Planner />,
  },
  // Add more routes as needed
];

function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterProvider;
