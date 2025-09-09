import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext";


export default function ThemeProvider({children}) {

    const [theme, setTheme] = useState('default')
    const toggleTheme = (value) => {
        // console.log(value,1234);
        setTheme(value)
        const themeTmp = localStorage.getItem(theme);
        if(themeTmp !== value) {
            localStorage.setItem('theme', value)
        }
    }

    useEffect(() => {
        const themeTmp = localStorage.getItem('theme')?localStorage.getItem('theme'):'default';
        setTheme(themeTmp)
    }, [])

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

