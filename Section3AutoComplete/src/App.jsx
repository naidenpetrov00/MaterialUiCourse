import { Autocomplete, Button, TextField } from "@mui/material";

function App() {
  const options = ["banana", "peach", "orange", "apple",];
  return (
    <div className="App">
      <Autocomplete options={options} renderInput={(params) => <TextField {...params} label="Fruit" />} />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default App;
