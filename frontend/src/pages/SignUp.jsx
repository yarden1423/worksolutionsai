import { useTheme } from "@emotion/react";
import {
  Grid,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import BadgeIcon from "@mui/icons-material/Badge";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import PasswordIcon from "@mui/icons-material/Password";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";

export default function Login() {
  const { palette } = useTheme();

  const [name, setName] = useState();
  const [taz, setTaz] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

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
        הירשם כמעסיק
      </Typography>

      <Grid container justifyContent={"center"}>
        <Grid item container xs={12} justifyContent={"center"}>
          <Grid item xs={6} container justifyContent={"center"}>
            <Grid item xs={5} mt="25px" container justifyContent={"center"}>
              <TextField
                label="שם מלא"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon />
                    </InputAdornment>
                  ),
                }}
                value={name}
                onChange={(e) => {
                  setName(() => e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={5} mt="25px" container justifyContent={"center"}>
              <TextField
                label="תעודת זהות"
                variant="outlined"
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
                label="מספר טלפון"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TabletAndroidIcon />
                    </InputAdornment>
                  ),
                }}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(() => e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={5} mt="25px" container justifyContent={"center"}>
              <TextField
                label="סיסמא"
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
            <Grid item xs={5} mt="25px" container justifyContent={"center"}>
              <TextField
                label="אימייל"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
                value={email}
                onChange={(e) => {
                  setEmail(() => e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Link to="/workplaces">
          <Grid item container justifyContent={"center"}>
            <Button
              variant="contained"
              sx={{ mt: "50px", width: "35vh" }}
              size="large"
              color="secondary"
            >
              <Grid container justifyContent={"center"}>
                <Typography fontSize={16}>הירשם</Typography>
              </Grid>
            </Button>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  );
}
