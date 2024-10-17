"use client"
import { ThemeProvider } from "./ThemeProvider"
import { Toaster } from "@/components/ui/toaster"


const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Toaster />
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
