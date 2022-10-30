import { useEffect, useState } from "react"
import { chatListData, groupMessage } from "../../utils/data"
import emoji from '../../assets/svg/emoji.svg'
import media from '../../assets/svg/media.svg'
import send from '../../assets/svg/send.svg'

export const ChatScreen = ({chatUser, chatType})=>{
    const[chatMessage,setChatMessage]= useState({})
    useEffect(()=>{
        if(chatType === 'chat'){
            const chat = chatListData.find((data)=>{
                return data.receiver === chatUser
            })
            console.log(chat, chatUser);
            setChatMessage(chat)
        }else if(chatType === "group"){
            const chat = groupMessage.find((data)=>{
                return data.id === 1
            })
            console.log(chat, chatUser);
            setChatMessage(chat)
        }
    },[chatUser])
    return(
        <div id="chatScreen">
            <div id="header">
                <div id="profile"></div>
                <div id="userName">{chatType === "chat" ? chatMessage.receiver : chatMessage.members}</div>
            </div>
            <div id="body">{
                chatMessage.messages?.map((msg,i)=>(
                    <div id="message" key={i} className={msg.senderId !== 'arun01' ? "receiverMessage" : "senderMessage"}>{msg.message}</div>

                ))
            }</div>
            <div id="footer">
                <div id="sendInput">
                    <input type="text" placeholder="Enter the message..." />
                </div>
                    {/* <img src={emoji} height={"30px"} width={"30px"} alt="emoji" /> */}
                    <img src={media} height={"30px"} width={"30px"} alt="media" />
                    <button>
                    <img src={send} height={"30px"} width={"30px"} alt="send" /> 
                    </button>
            </div>
        </div>
    )
}