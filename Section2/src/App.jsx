// import AutoCompleteExample from "./AutoCompleteEcample";

import { Grid } from "@mui/material";
import Subscription from "./Subscription";

const subscriptions = [
  "Sub 1",
  "Sub 2",
  "Sub 3",
  "Sub 4",
  "Sub 5",
  "Sub 6",
  "Sub 7",
  "Sub 8",
];

function App() {
  return (
    <div className="App">
      <Grid container height="100vh">
        <Grid
          item
          container
          bgcolor="blue"
          direction="column"
          md={2}
          display={{ xs: "none", md: "flex" }}
        >
          {subscriptions.map((sub) => (
            <Subscription key={name} name={sub} />
          ))}
        </Grid>
        <Grid item container bgcolor="red" md={10}></Grid>
      </Grid>
    </div>
  );
}

export default App;
