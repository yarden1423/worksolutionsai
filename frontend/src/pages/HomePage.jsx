import { useTheme } from "@emotion/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/main.png";
import WorkIcon from "@mui/icons-material/Work";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

export default function HomePage() {
  const { palette } = useTheme();

  return (
    <Grid container>
      <Grid xs={5}>
        <img
          src={Logo}
          width={"500px"}
          style={{ marginTop: "150px", marginRight: "150px" }}
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        xs={7}
      >
        <Typography
          sx={{
            marginTop: "12vh",
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
          שמים את המקצוענים במרכז
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
          fontSize={30}
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
              sx={{ my: "10px", width: "55vh" }}
              color="primary"
            >
              <Grid container justifyContent={"space-between"}>
                <Typography fontSize={16}>אני מפונה שמחפש עבודה</Typography>
                <WorkIcon />
              </Grid>
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="contained"
              sx={{ mt: "20px", width: "55vh" }}
              size="large"
              color="secondary"
            >
              <Grid container justifyContent={"space-between"}>
                <Typography fontSize={16}>
                  אני מעסיק שרוצה להציע עבודה למפונים
                </Typography>
                <HomeRepairServiceIcon />
              </Grid>
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
