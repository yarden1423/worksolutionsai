import { useTheme } from "@emotion/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import * as React from "react";

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
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ mb: "10px" }}
        >
          <Typography fontSize={20}>אני מפונה שמחפש עבודה</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ mb: "10px", mt: "2px" }}
          size="large"
          color="secondary"
        >
          <Typography fontSize={20}>
            אני מעסיק שרוצה להציע עבודה למפונים
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
}
