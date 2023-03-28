import { createTheme } from "@material-ui/core/styles";
import coreTheme, { colors } from "./coreTheme";

// Create a theme instance.
const theme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    background: {
      default: colors.dark,
      paper: "rgb(40, 40, 40)",
    },
    primary: {
      main: "#ffaf1d",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "#aeacac",
    },
    type: "dark",
  },
  overrides: {
    ...coreTheme.overrides,
    MuiSnackbarContent: {
      root: {
        color: "#fff",
        backgroundColor: "#2A2E3C",
        padding: "0px",
        minWidth: "auto",
        "@media (min-width: 960px)": {
          minWidth: "400px",
        },
      },
      message: {
        padding: "0px",
      },
      action: {
        marginRight: "0px",
      },
    },
    MuiTooltip: {
      tooltip: {
        background: "#FFF !important",
        border: "1px solid #fff",
        borderRadius: "8px",
        color: "#000",
        fontSize: "13px",
      },
    },
  },
});

export default theme;
