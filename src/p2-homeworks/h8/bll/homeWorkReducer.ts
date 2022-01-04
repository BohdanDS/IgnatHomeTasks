let initialState: initialStateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

type initialStateType = Array<user>

export type user = {
    _id: number
    name: string
    age: number
}

export const homeWorkReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            stateCopy.sort((a, b) => a.name > b.name ? 1 : -1)
            return action.payload === 'up'? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            let stateCopy = [...state]

            return stateCopy.filter(a=> a.age > action.payload)
        }
        default:
            return state
    }
}


type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }