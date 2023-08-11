import { useContext } from "react";
import ThemeContext from "../context/themeContext";

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
