function loginHTML(){
  return `<div id="homepage" class="main-container">
    <div id="login">
    <h3> Login </h3>
      <form id="add-user">
        <label> Enter Username:</label>
        <input id="username-input" type="text" name="enter-username" required>
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
  <button id="back">Back</button>
    <div id="chatbox">
      <ul id="chat1">
        ${getCommentsHTML(chatRoom.id)}
      </ul>

      <form id="add-comment">
        <input id="add-comments-input" type="text">
        <input type="submit" value="Add Comment" class="btn">
      </form>

    </div>
  </div>`
}

function getCommentsHTML(chatId) {
  let filteredComments = getCommentsById(chatId)
  return filteredComments.map(comment => {
    return `<li id="comment${comment.id}">${comment.text}</li>`
  }).join("")
}

function getCommentsById(commentId){
  return store.comments.filter(comment => {
    return comment.chat_id === commentId
  })
}
