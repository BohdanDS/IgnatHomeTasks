import React, {ChangeEvent, useState} from 'react';
import {Button, Checkbox} from "@mui/material";
import {NekoCafeAPI} from "./RequestsAPI";

const Hw13 = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
    }

    const handleButton = () => {
        NekoCafeAPI.setCheckbox(checked)
            .then((response) =>setResponse(response.data.errorText))
            // .catch((error)=>setResponse(error.errorText))
            .catch(error => {
                setResponse(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <Checkbox checked={checked} onChange={handleCheckbox}/>
            <Button variant="outlined" onClick={handleButton}>Submit</Button>
            {response && <div><h3>{response}</h3><p></p></div>}
        </div>
    );
};

export default Hw13;