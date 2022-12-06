import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffee32",
    },
    secondary: {
      main: "#202020",
    },
    background: {
      default: "#f5f3f4",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
