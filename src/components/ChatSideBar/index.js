import { ChatList } from "../ChatList"
import { chatListData } from "../../utils/data"
import { Link } from 'react-router-dom'

export const ChatSideBar =({setChatUser})=>{
    return(
        <div  id="sideBar">
            <div id="header">
                <div id="userDetail">
                    <Link to={'/login'}>
                        <div id="profile"></div>
                    </Link>
                    <div id="user">
                        <div id="userName">Arun kumar</div>
                        <div id="userRole">Admin</div>
                    </div>
                </div>
                {/* <div id="searchField"></div> */}
            </div>
            <div id="body">
                <div id="nav">
                    <div id="chats">CHATS</div>
                    <div id="groups">GROUPS</div>
                </div>
                <div id="bodyContent">
                    {chatListData?.map((data,i)=>(
                        <ChatList setChatUser={setChatUser} key={i} data={data} /> 
                    ))}
                </div>
            </div>
        </div>
    )
}