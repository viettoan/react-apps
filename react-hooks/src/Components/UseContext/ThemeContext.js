import {createContext, useState} from "react";

const ThemeContext = createContext()

function ThemeProvider({children})
{
    const [theme, setTheme] = useState();
    const toogle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider value={{theme,toogle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}