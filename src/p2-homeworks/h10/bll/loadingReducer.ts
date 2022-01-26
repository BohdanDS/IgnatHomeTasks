export type InitStateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionTypes): InitStateType => {
    switch (action.type) {
        case 'SET-LOADING-VALUE': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

type ActionTypes = LoadingACType
type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: 'SET-LOADING-VALUE',
        loading
    } as const
} // fix any