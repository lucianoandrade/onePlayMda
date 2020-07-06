import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000",
      error: "#D8B931",
      highlight: "#f1f1f1"
    },
    secondary: {
      main: "#000"
    }
  }
});

export default Theme;
