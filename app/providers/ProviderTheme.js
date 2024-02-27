"use client"
import { ThemeProvider } from "next-themes"
import React , {useState,useEffect} from "react"

export const ProviderTheme = ({children}) => {
    const [mounted,setIsMounted] = useState(null)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!mounted) {
        return <>{children}</>
    }
    return (
        <ThemeProvider defaultTheme="dark" disableTransitionOnChange={false} enableSystem={false} attribute="class">
            {children}
        </ThemeProvider>
    )
}