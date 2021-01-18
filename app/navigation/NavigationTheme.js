import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default myTheme;
