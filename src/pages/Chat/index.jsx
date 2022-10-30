import { ChatScreen } from '../../components/chatScreen'
import { ChatSideBar } from '../../components/ChatSideBar'
import { useState } from 'react'
import './chat.scss'
export const Chat = ()=>{
    const [chatUser,setChatUser] = useState("Raja")
    return(
        <div id="chat">
            <ChatSideBar setChatUser={setChatUser}/>
            <ChatScreen chatUser={chatUser}/>
        </div>
    )
}