"use client"
import { ThemeProvider } from "./ThemeProvider"



const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      {children}
      </ThemeProvider>
    </div>
  )
}

export default Provider
