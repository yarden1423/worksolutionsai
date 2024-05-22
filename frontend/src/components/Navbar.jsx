import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container>
          <Grid item ml="15px" mt="8px">
            <Link to={"/"}>
              <HomeIcon />
            </Link>
          </Grid>
          <Grid item xs={6} container justifyContent={"start"} mt="2px">
            <Typography variant="h5" color="inherit" textAlign={"left"}>
              ממפונים לכוכבים
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
