import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css"

import {PATH} from "./Routing";

function Header() {

    const [active, setActive] = useState<boolean>(false)

    const onHover = () => {
        setActive(!active)
    }


    return (
        <div className={s.navigation}>
            <button onClick={onHover}>Navigation</button>
            {active &&
            <span>
                <NavLink className={s.link} to={PATH.PRE_JUNIOR}>Pre-Junior </NavLink>
                <NavLink className={s.link} to={PATH.JUNIOR}>Junior </NavLink>
                <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink>
            </span>
            }
        </div>
    )
}

export default Header
