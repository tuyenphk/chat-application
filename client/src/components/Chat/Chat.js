import React, {useState} from "react"
import io from "socket.io-client"

import {InfoBar} from '../InfoBar/InfoBar'
import "./Chat.css"
export const Chat = ({location}) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [messages, setMessages] = useState('');
    const [message, setMessage] = useState('');

    return(
        <div className="outerContainer">
            {/* <TextContainer users={users} /> */}
            <div className="container">
                <InfoBar room={room} />
                {/* <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> */}
            </div>
        </div>
    )
}