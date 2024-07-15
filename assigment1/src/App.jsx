import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyStyledButton = styled(Button)({
  fontSize: { xs: "10px", sm: "20px" },
  fontStyle: "Roboto",
  bgcolor: "secondary.main",
  color: "primary.main",
  "$:hover": {
    bgcolor: "primary.main",
    color: "secondary.main",
  },
});

function App() {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{
          fontSize: { xs: "10px", sm: "20px" },
          fontStyle: "Roboto",
          bgcolor: "secondary.main",
          color: "primary.main",
          "$:hover": {
            bgcolor: "primary.main",
            color: "secondary.main",
          },
        }}
      >
        Submit
      </Button>
      <MyStyledButton variant="contained" size="large">
        StyledSubmit
      </MyStyledButton>
    </>
  );
}

export default App;
