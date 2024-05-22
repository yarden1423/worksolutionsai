import { createTheme } from '@mui/material/styles';
import { StylesProvider, jssPreset } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { red } from "@mui/material/colors";


// Create a theme instance.
const theme = createTheme({
  direction: 'rtl', // Set the direction to RTL
  typography: {
   fontFamily: 'heebo'
  },
  palette: {
    primary: {
      main: "#33658A",
    },
    secondary: {
      main: "#8A4F7D",
    },
    error: {
      main: red.A400,
    },}
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default theme;
export { jss, StylesProvider }
