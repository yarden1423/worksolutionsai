import { createTheme } from '@mui/material/styles';
import { StylesProvider, jssPreset } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

// Create a theme instance.
const theme = createTheme({
  direction: 'rtl', // Set the direction to RTL
  typography: {
   fontFamily: 'system-ui'
  },
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default theme;
export { jss, StylesProvider }
