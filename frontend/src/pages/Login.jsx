import { useTheme } from "@emotion/react";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";

import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import PasswordIcon from "@mui/icons-material/Password";
import { Link } from "react-router-dom";

export default function Login() {
  const { palette } = useTheme();

  const [taz, setTaz] = useState();
  const [password, setPassword] = useState();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        marginTop={"15px"}
        sx={{
          marginBottom: "10px",
          backgroundImage: `-webkit-linear-gradient(top right, ${palette.primary.main}, ${palette.secondary.main})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mx: "auto",
        }}
        fontSize={45}
      >
        התחבר כמעסיק
      </Typography>

      <Grid container justifyContent={"center"}>
        <Grid item container xs={12} justifyContent={"center"}>
          <Grid item xs={6} container justifyContent={"center"}>
            <Grid item xs={5} mt="25px" container justifyContent={"center"}>
              <TextField
                label="תעודת זהות"
                variant="outlined"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SafetyDividerIcon />
                    </InputAdornment>
                  ),
                }}
                value={taz}
                onChange={(e) => {
                  setTaz(() => e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={5} mt="25px" container justifyContent={"center"}>
              <TextField
                label="סיסמא"
                type="password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={(e) => {
                  setPassword(() => e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item xs="2" mx={"30px"}>
            <Link to="/signup">
              <Grid item container justifyContent={"center"}>
                <Button
                  variant="contained"
                  sx={{ mt: "50px", width: "33vh" }}
                  size="large"
                  color="secondary"
                >
                  <Grid container justifyContent={"center"}>
                    <Typography fontSize={20}>לא רשום?</Typography>
                  </Grid>
                </Button>
              </Grid>
            </Link>
          </Grid>
          <Grid item xs="2" mx={"30px"}>
            <Link to="/workplaces">
              <Grid item container justifyContent={"center"}>
                <Button
                  variant="contained"
                  sx={{ mt: "50px", width: "33vh" }}
                  size="large"
                  color="primary"
                >
                  <Grid container justifyContent={"center"}>
                    <Typography fontSize={20}>התחבר</Typography>
                  </Grid>
                </Button>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
