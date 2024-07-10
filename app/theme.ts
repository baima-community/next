// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(242,103,37)',
    },
    secondary: {
      main: '#14171A',
    },
  },
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

export default theme;
