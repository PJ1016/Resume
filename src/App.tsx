import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./conatiners/home";
const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/Resume" : "/";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  { basename }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
