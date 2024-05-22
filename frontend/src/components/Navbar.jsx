import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container>
          <Grid item xs={6}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
          </Grid>
          <Grid item xs={6} container justifyContent={"end"}>
            <Typography variant="h5" color="inherit">
              ממפונים לכוכבים
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
