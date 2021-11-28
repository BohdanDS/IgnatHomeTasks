import React from 'react'
import s from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.textArea}>
                <span className={s.messageAuthor}>{props.name}</span>
                <div className={s.messageArea}>
                    <span className={s.messageBody}>{props.message}</span>
                    <div className={s.messageTime}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
