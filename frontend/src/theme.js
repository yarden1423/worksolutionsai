import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#33658A",
    },
    secondary: {
      main: "#8A4F7D",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
