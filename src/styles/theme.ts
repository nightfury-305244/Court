import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 441,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1536,
    },
  },
  typography:{
    fontFamily: 'Yekan Bakh',
    h1: {
      fontSize: '24px',
      fontWeight: 700,
      color: '#090101',
      lineHeight: "37.2px",
    },
    h2: {
      fontSize: '12px',
      fontWeight: 400,
      color: "#000000",
      lineHeight: "18.6px",
    },
    h4: {
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "18.6px",
      color: "#A4A2A4",
    },
    // You can add more styles for other text variants (h3, h4, subtitle1, etc.)
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
      color: 'darkgray'
    }
  },
  palette: {
    primary: {
      main: "#3C638E", // blue
      light: "#FFFFFF",
      dark: "#000000" 
    },
    secondary:{
      main: "#EBEEEF", //grey 1
      light: "#828282" //gret label text
    },
    warning:{
      main: "#FEBE40", //yellow
      light: "#E0E0E0"
    },
    info: {
      main: "#606060",  // grey (badge)
      light: "#A4A2A4", // grey (text)
      dark: "#090101",  //block (title)
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          color: "#FFFFFF"
        }
      }
    }
  }
});
