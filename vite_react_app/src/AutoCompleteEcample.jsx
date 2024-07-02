import { Autocomplete, Paper, TextField } from "@mui/material";
import { useState } from "react";

const CustomPaper = (props) => {
  const { sx, ...otherProps } = props;
  return (
    <Paper
      {...otherProps}
      sx={{
        ...sx,
        bgcolor: "green",
        "& .MuiAutocomplete-option": {
          color: "blue",
        },
      }}
    >
      {props.children}
    </Paper>
  );
};

const AutoCompleteExample = () => {
  const [value, setValue] = useState([]);
  const options = ["Apple", "Banana", "Pear", "Orange"];

  return (
    <Autocomplete
      ChipProps={{
        sx: {
          backgroundColor: "green",
          "& .MuiChip-label": {
            color: "#fff",
          },
        },
      }}
      PaperComponent={CustomPaper}
      multiple
      open
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      options={options}
      renderInput={(params) => <TextField {...params} label="Fruit" />}
    />
  );
};

export default AutoCompleteExample;
