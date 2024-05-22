import { useTheme } from "@emotion/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
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
          marginTop: "10vh",
          marginBottom: "10px",
          backgroundImage: `-webkit-linear-gradient(top right, ${palette.primary.main}, ${palette.secondary.main})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mx: "auto",
        }}
        fontSize={100}
      >
        Work Solutions AI
      </Typography>
      <Typography
        sx={{
          backgroundImage: `-webkit-linear-gradient(top right, ${palette.primary.main}, ${palette.secondary.main})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        fontSize={50}
      >
        עוזרים למפונים למצוא עבודה
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          marginInline: "10vw",
          marginTop: "10vh",
        }}
      >
        <Link to="/cvpage">
          <Button
            variant="contained"
            size="large"
            sx={{ my: "10px", width: "60vh" }}
            color="primary"
          >
            <Typography fontSize={20}>אני מפונה שמחפש עבודה</Typography>
          </Button>
        </Link>
        <Link to="/workplaces">
          <Button
            variant="contained"
            sx={{ mt: "20px", width: "60vh" }}
            size="large"
            color="secondary"
          >
            <Typography fontSize={20}>
              אני מעסיק שרוצה להציע עבודה למפונים
            </Typography>
          </Button>
        </Link>
      </Box>
    </Grid>
  );
}
