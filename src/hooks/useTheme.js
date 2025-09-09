import { useContext } from "react";
import {ThemeContext} from "../components/ThemeProvider/ThemeContext";
export default function useTheme() {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error('useTheme must be used in a ThemeProvider')
    }
    
    return context;
}