import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // fixed
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // fixed
    addUser: ()=>void // fixed
    error: string // fixed
    totalUsers: number // fixed
    setError: (error:string)=> void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,setError} // деструктуризация пропсов справа должен быть объект
) => {
    const inputClass = error ? s.error : s.default

    const checkEmptyInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' '){
            e.preventDefault()
            setError('Enter valid Name !!!')
            }
        else if (e.key === 'Enter'){
            addUser()
        }
        else {
            setError('')
        }
}
    return (
        <div className={s.div}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={checkEmptyInput}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div> {error ? <span className={s.error}>{error}</span> : ''} </div>
        </div>
    )
}

export default Greeting
