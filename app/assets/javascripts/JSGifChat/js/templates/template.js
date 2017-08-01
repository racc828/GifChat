function loginHTML(){
  return `<div id="homepage">
    <div id="login">
      <form id="add-user">
        <label> Enter Email:</label>
        <input id="email-input" type="email" name="enter-email">
        <input type="submit" value="join">
      </form>
    </div>
  </div>`
}

function chatRoomsHTML() {
  return `<div id="chatrooms">

      <form id="add-chat">
        <label> Enter New Chat Name:</label>
        <input id="chat-room-name" type="text" name="enter-chat-name">
        <input type="submit" value="create chat">
      </form>

      <div id="chats">
        <ul id="chatList">
          ${getChatsHTML()}
        </ul>
      </div>

    </div>`
}

function getChatsHTML() {
  return store.chats.map(function(chat){
    return `<li>${chat.name}</li>`
  }).join("")
}

function chatRoomHTML(){
  return `<div id="chatroom">
    <div id="chatbox">
      <ul id="chat1">
        <li> NEW CHAT ROOM </li>
      </ul>

      <form id="add-comment">
        <input id="add-comments-input" type="text">
        <input type="submit" value="Add Comment">
      </form>

    </div>
  </div>`
}
