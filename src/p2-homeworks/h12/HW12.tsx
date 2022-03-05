import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";


// export type themesType = typeof themes
const themes = ['dark', 'red', 'some', 'orange']

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback
    const changeTheme = (themeValue:string) => {
        dispatch(changeThemeAC(themeValue))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption = {changeTheme}/>

            <hr/>
        </div>
    );
}

export default HW12;
