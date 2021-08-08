import React from 'react'
import {
    HeadingSection,
    Title,
    TimeSelectorContent,
    TimeSelectorLabel,
    TimeSelectorWrapper
} from "../../features/booking/calender/calender.style";

const TimeSelector = ({ handleChange, data, active }) => {
    return (
        <>

            <TimeSelectorWrapper>

                <TimeSelectorContent>
                    {
                        data?.map((time, index) => {
                            return (
                                <TimeSelectorLabel key={index} active={active == time} onClick={() => handleChange(time)}>

                                    {time}</TimeSelectorLabel>
                            )
                        })
                    }

                </TimeSelectorContent>

            </TimeSelectorWrapper>
        </>
    )
}

export default TimeSelector
