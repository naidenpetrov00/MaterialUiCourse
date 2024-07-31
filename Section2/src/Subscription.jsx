import { Avatar, Grid, Typography } from "@mui/material";

const Subscription = ({ name }) => {
  return (
    <Grid item container padding={1}>
      <Grid item xs={2}>
        <Avatar alt={name}></Avatar>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
    </Grid>
  );
};
Subscription.propTypes = {
  name: String,
};
export default Subscription;
