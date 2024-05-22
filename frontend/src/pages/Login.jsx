import { useTheme } from "@emotion/react";
import { Grid, Typography, Box } from "@mui/material";
import * as React from "react";
import ReactCodeInput from "react-code-input";


export default function Login() {
  const { palette } = useTheme();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
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
        fontSize={50}
      >
        Auth
      </Typography>
      <div dir='ltr'>
        <ReactCodeInput fields={9} type="text" inputStyle={{
          fontFamily: 'monospace',
          margin: '0.5vw',
          width: '4vw',
          borderRadius: '1vw',
          fontSize: '4vw',
          height: '4vw',
          paddingLeft: '7px',
          backgroundColor: 'white',
          color: `purple`,
          border: '1px solid lightskyblue',
        }} />
        <br></br>
        <ReactCodeInput fields={10} type="text" inputStyle={{
          fontFamily: 'monospace',
          margin: '0.5vw',
          width: '4vw',
          borderRadius: '1vw',
          fontSize: '4vw',
          height: '4vw',
          paddingLeft: '7px',
          backgroundColor: 'white',
          color: `purple`,
          border: '1px solid lightskyblue',
        }} />

      </div>
    </Grid>
  );
}



