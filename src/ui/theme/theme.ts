import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: 'rgba(0, 0, 0, 0.04)',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#2e7d32',
    },
  },
});
