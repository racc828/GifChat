function loginHTML(){
  return `<div id="homepage" class="main-container">
    <div id="login">
    <h3> Login </h3>
      <form id="add-user">
        <label> Enter Email:</label>
        <input id="email-input" type="email" name="enter-email">
        <input type="submit" value="join" class="btn">
      </form>
    </div>
  </div>`
}

function chatRoomsHTML() {
  return `<div id="chatrooms" class="main-container">

      <form id="add-chat">
        <label> Enter New Chat Name:</label>
        <input id="chat-room-name" type="text" name="enter-chat-name" required>
        <input type="submit" value="create chat" class="btn">
      </form>

      <div id="chats">
        <ul id="chatList">
          <div class="chat-room">
            ${getChatsHTML()}
          </div>
        </ul>
      </div>

    </div>`
}

function getChatsHTML() {
  return store.chats.map(function(chat){

    return `<li id="chat${chat.id}"><div class="overlay"></div>${chat.name}</li>`
  }).reverse().join("")
}

function chatRoomHTML(chatRoom){
  return `<div id="chatroom" class="main-container">
  <h1 id="chatroom-name">${chatRoom.name}</h1>
    <div id="chatbox">
      <ul id="chat1">
        ${getCommentsHTML()}
      </ul>

      <form id="add-comment">
        <input id="add-comments-input" type="text">
        <input type="submit" value="Add Comment" class="btn">
      </form>

    </div>
  </div>`
}

function getCommentsHTML() {
  return store.users[0].chats[0].comments.map(comment => {
    return `<li id="comment${comment.id}">${comment.text}</li>`
  }).join("")
}
