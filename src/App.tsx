import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./conatiners/home";
const router = createBrowserRouter([
  {
    path: "/Resume/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
