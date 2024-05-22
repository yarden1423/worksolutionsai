import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ marginY: "15px" }}>
        <Grid
          item
          xs={6}
          container
          justifyContent={"space-between"}
          mt="2px"
          mr={"10px"}
        >
          <Link to="/" color="white" style={{ textDecoration: "none" }}>
            <Typography variant="h5" color="white">
              ממפונים לכוכבים
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} container justifyContent={"end"}>
          <img src={Logo} width={"100px"} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
