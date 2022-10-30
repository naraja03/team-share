
export const ChatList =({data})=>{
    console.log(data);
    return(
        <div className="chatList">
            <div className="profile"></div>
            <div className="user">
                <div className="userName">{data.receiver}</div>
                <div className="lastMessage">{data.lastMessage}</div>
            </div>
        </div>
    )
}