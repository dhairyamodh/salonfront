import React from 'react'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../site-settings/site-theme/default";
import { useSelector } from "react-redux";

function ThemeContainer({ children }) {
    const { primaryColor, secondaryColor, lighterColor } = useSelector(state => state.shop.salonData)
    const primaryData = { regular: primaryColor, hover: secondaryColor }
    const secondaryData = { regular: secondaryColor, hover: secondaryColor }
    const lighterData = { regular: lighterColor, hover: lighterColor }
    return (
        <ThemeProvider theme={defaultTheme(primaryData, secondaryData, lighterData)}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContainer
