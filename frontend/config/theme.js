import { createTheme } from "@mui/material";
// import Medium from "../fonts/RobotoMono-Medium.ttf";
// import Regular from "../fonts/RobotoMono-Regular.ttf";
// import SemiBold from "../fonts/RobotoMono-SemiBold.ttf";
// import RobotoMono from "../fonts/RobotoMono-VariableFont_wght.ttf";
import localFont from "next/font/local";

export const BoldFont = localFont({ src: "../fonts/OpenSans-ExtraBold.ttf" });
export const MediumFont = localFont({ src: "../fonts/OpenSans-Medium.ttf" });
export const RegularFont = localFont({
  src: "../fonts/OpenSans-Regular.ttf",
});
export const SemiBoldFont = localFont({
  src: "../fonts/OpenSans-Bold.ttf",
});

const h_big_style = { fontFamily: BoldFont.style.fontFamily };
const h_small_style = { fontFamily: SemiBoldFont.style.fontFamily };
const theme = createTheme({
  typography: {
    fontFamily: MediumFont.style.fontFamily,
    h1: h_big_style,
    h2: h_big_style,
    h3: h_big_style,
    h4: h_small_style,
    h5: h_small_style,
    h6: h_small_style,
    button: {
      fontFamily: SemiBoldFont.style.fontFamily,
      color: "#333333",
    },
  },
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#95a5a6",
    },
  },
});

export default theme;
