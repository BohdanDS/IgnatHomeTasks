import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // fixed
    addUserCallback: (name: string) => void// fixed
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed
            setName(e.currentTarget.value)
         // fixed
    }
    const addUser = () => {
            addUserCallback(name)
            alert(`Hello ${name} !`) // fixed
            // setTotalUsers(++totalUsers)
            setName('')
            setError('')
    }

    // let [totalUsers, setTotalUsers] = useState(0) //fixed

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setError={setError}
        />
    )
}

export default GreetingContainer
