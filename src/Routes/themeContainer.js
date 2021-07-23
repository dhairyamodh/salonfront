import React from 'react'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../site-settings/site-theme/default";
import { useSelector } from "react-redux";

function ThemeContainer({ children }) {
    const { primaryColor, secondaryColor, primaryLight, primaryDark, secondaryLight } = useSelector(state => state.shop.salonData)
    const primaryData = { regular: primaryColor, hover: secondaryColor }
    const secondaryData = { regular: secondaryColor, hover: secondaryColor }
    const lighterData = { regular: primaryLight, hover: primaryLight }
    const darkerData = { regular: primaryDark, hover: primaryDark }
    const secondaryLightData = { regular: secondaryLight, hover: secondaryLight }
    return (
        <ThemeProvider theme={defaultTheme(primaryData, secondaryData, lighterData, darkerData, secondaryLightData)}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContainer
