import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Button sx={{ typography: "blueTextClass" }} variant="contained">
        My Button
      </Button>
      <Button
        sx={{
          bgcolor: "secondary.main",
          boxShadow: (theme) => theme.shadows[5],
        }}
        variant="contained"
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
