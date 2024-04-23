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
  palette: {
    primary: {
      main: "#EBEEEF",
      light: "#FFFFFF"
    }
  }
});
