const initState = {
    theme: ''
};

export const themeReducer = (state = initState, action: ChangeThemeType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme };
        }
        default:
            return state;
    }
}

type ChangeThemeType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => ({
    type: "CHANGE-THEME",
    theme
} as const);