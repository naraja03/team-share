
export const ChatList =({data,setChatUser})=>{
    console.log(data);
    return(
        <div className="chatList" onClick={()=>setChatUser(data.receiver)}>
            <div className="profile"></div>
            <div className="user">
                <div className="userName">{data.receiver}</div>
                <div className="lastMessage">{data.lastMessage}</div>
            </div>
        </div>
    )
}