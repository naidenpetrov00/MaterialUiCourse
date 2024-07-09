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
  const [value, setValue] = useState(null);
  const options = [
    { name: "Apple", year: 2022 },
    { name: "Banana", year: 2024 },
    { name: "Pear", year: 2021 },
    { name: "Orange", year: 2026 },
  ];

  console.log(value);

  return (
    <Autocomplete
      sx={{ width: "15rem", "& .MuiInputBase-input": { height: "2rem" } }}
      freeSolo
      value={value}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      onChange={(event, newValue) => setValue(newValue)}
      //multiple
      options={options.sort((a, b) => (a.year > b.year ? 1 : -1))}
      // getOptionDisabled={(option) => option.year !== 2022}
      // groupBy={(option) => option.year}
      // renderOption={(props, option) => (
      //   <div
      //     {...props}
      //     style={{ backgroundColor: option.name.includes("P") ? "red" : null }}
      //   >
      //     {option.name}
      //   </div>
      // )}
      // limitTags={2}
      onBlur={(event) =>
        event.target.value !== value ? setValue(event.target.value) : null
      }
      getOptionLabel={(option) =>
        typeof option === "string" ? option : `${option.name} - ${option.year}`
      }
      renderInput={(params) => <TextField {...params} label="Fruit" />}
    />
  );
};

export default AutoCompleteExample;
