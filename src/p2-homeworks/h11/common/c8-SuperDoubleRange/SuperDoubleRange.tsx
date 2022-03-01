import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(newValue)
        onChangeRange && onChangeRange(newValue as [number, number]);
    };
    return (
        <>
            <Box sx={{width: 300, margin: "40px"}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    color="secondary"
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
