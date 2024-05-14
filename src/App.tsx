import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./conatiners/home";
import Meghana from "./conatiners/home/Meghana";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Meghana",
    element: <Meghana />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
