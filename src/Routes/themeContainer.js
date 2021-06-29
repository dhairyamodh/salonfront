import React from 'react'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../site-settings/site-theme/default";
import { useSelector } from "react-redux";

function ThemeContainer({ children }) {
    const { primaryColor, secondaryColor } = useSelector(state => state.shop.salonData)
    const primaryData = { regular: primaryColor, hover: secondaryColor }
    const secondaryData = { regular: secondaryColor, hover: secondaryColor }
    return (
        <ThemeProvider theme={defaultTheme(primaryData, secondaryData)}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContainer
