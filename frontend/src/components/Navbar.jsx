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
              חיפוש יעיל, התאמה מדוייקתֲ!
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} container justifyContent={"end"}>
          <Link to="/" color="white" style={{ textDecoration: "none" }}>
            <img src={Logo} width={"100px"} />
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
