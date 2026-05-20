import React, { createContext, useState } from 'react'


export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light')

    function toggleTheme(){
        console.log(theme,"In provider")
        setTheme(prev => prev == 'light' ? 'dark' :'light')
    }
  return (
    <ThemeContext value={{theme,toggleTheme}}>{children}</ThemeContext>
  )
}
export default ThemeProvider