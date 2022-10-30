import { ChatScreen } from '../../components/chatScreen'
import { ChatSideBar } from '../../components/ChatSideBar'
import './chat.scss'
export const Chat = ()=>{
    return(
        <div id="chat">
            <ChatSideBar/>
            <ChatScreen/>
        </div>
    )
}