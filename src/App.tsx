import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./conatiners/home";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import "./fonts.css";
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
  const theme = createMuiTheme({
    typography: {
      fontFamily: "CalvinKevin",
      // Other typography settings...
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
