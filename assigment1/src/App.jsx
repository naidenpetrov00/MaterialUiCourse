import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyStyledAvatar = styled(Avatar)(({ theme }) => ({
  fontFamily: "Roboto",
  backgroundColor: theme.palette.secondary.main,
  outline: "solid black",
  [theme.breakpoints.down("sm")]: {
    width: "4rem",
    height: "4rem",
  },[theme.breakpoints.down("xs")]: {
    width: "3rem",
    height: "3rem",
  },
  "&:hover": { color: "black" },
}));

function App() {
  return (
    <>
      <MyStyledAvatar alt="Mitko">M</MyStyledAvatar>
      <Avatar
        alt="Nayden"
        sx={{
          fontFamily: "Roboto",
          bgcolor: "secondary.main",
          outline: "solid black",
          width: { xs: "4rem", sm: "3rem" },
          height: { xs: "4rem", sm: "3rem" },
          "&:hover": { color: "black" },
        }}
      >
        N
      </Avatar>
    </>
  );
}

export default App;
