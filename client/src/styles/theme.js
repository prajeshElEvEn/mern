import { createTheme } from "@mui/material/styles";

const font = " 'Poppins', sans-serif";

export const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
