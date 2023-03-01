// import React library
import * as React from "react";
// import components
import Navbar from "./components/Navbar";
import Sidbar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
// import MUI system components
import { Stack } from "@mui/system";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Add from "./components/Add";

function App() {
  // initialize mode state variable and set default value to "light"
  const [mode, setMode] = React.useState("light");
  // create dark theme based on mode state variable
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // render components with theme and mode state variables
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidbar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

// export the App component as default
export default App;
