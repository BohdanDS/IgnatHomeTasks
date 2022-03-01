import React, {useEffect, useState} from 'react'
import {ChangeEvent} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    // min?:number
    // max?:number
    // step?:number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
         // min, max, step, ...props
    }
) => {
    // сделать самому, можно подключать библиотеки

    // console.log(onChangeRange)
    // console.log(value)
    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     onChangeRange && onChangeRange(newValue as [number, number]);
    // };
    // const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setLocalValue(Number(e.currentTarget.value))
    //     console.log(e.currentTarget.value)
    // }
    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(newValue)
        onChangeRange && onChangeRange(newValue as [number, number]);
    };
    return (
        <>
            <Box sx={{ width: 300, margin: "40px" }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
