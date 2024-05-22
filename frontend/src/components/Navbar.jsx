import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid item xs={6} container justifyContent={"start"} mt="2px">
          <Link to="/" color="white" style={{ textDecoration: "none" }}>
            <Typography variant="h5" color="white">
              ממפונים לכוכבים
            </Typography>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
