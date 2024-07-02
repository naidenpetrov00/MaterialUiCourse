import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    customColors: {
      royalBlue: "#4169E1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
  },
  // typography: {
  //   blueTextClass: {
  //     color: "red",
  //   },
  // },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
