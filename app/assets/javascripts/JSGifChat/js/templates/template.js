function loginHTML(){
  return `<div id="homepage" class="main-container">
    <div id="login">
    <h3> Login </h3>
      <form id="add-user">
        <label> Enter Username:</label>
        <span style="color:red" id='invalid-username'></span>
        <span style="color:green" id='valid-username'></span>
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
      </form><br>

      <div id="filter-chat">
        <label> Find A Chat:</label>
        <input id="find-chat-room" type="text" name="filter-chat-name">
      </div>

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

    return `<li id="chat${chat.id}" class= "chat-item"><div class="overlay"><h5>Join Chat</h5></div><div id="displayedChatroom">${chat.name}</div></li>`
  }).reverse().join("")
}

function getFilteredChatsHTML(arrayOfChats) {
  return arrayOfChats.map(chat => {

    return `<li id="chat${chat.id}" class= "chat-item"><div class="overlay"><h5>Join Chat</h5></div><div id="displayedChatroom">${chat.name}</div></li>`
  }).reverse().join("")
}

function chatRoomHTML(chatRoom){
  return `<div id="chatroom" class="main-container">
  <div class="chat-top-bar">
      <i class="small material-icons" id="back">arrow_back</i>
      <h5 id="chatroom-name">${chatRoom.name}</h5>
    </div>
    <div id="chatbox">
      <div id="subChatBox">
        <ul id="chat1">
          <div class="chat-container" id="chat-scroll"> ${getCommentsHTML(chatRoom.id)}
          </div>
        </ul>
      </div>
      <form id="add-comment" class="toggle-comment-form">
        <i class="material-icons add-gif" id="gif-toggle">add</i>
        <input id="add-comments-input" class="chat-form-input" type="text" placeholder="Send Message" required>
        <button type="submit" class="btn send-message-btn"><i class="material-icons">send</i></button>
      </form>

      <div id="gif-search-form" class="toggle-gif-search">
        <div id="gif-search">
          <i class="material-icons add-gif" id="gif-toggle">search</i>
          <input id="gif-query" class="chat-form-input" type="text" placeholder="Search For Gifs">
          <button id="get-new-gifs"  class="btn" type="submit">Get Gifs</button>
        </div>
      </div>

      <div id ="slider-container">    

        <div id="slick-slider" class="center" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
        </div>

      </div>

    </div>
  </div>`
}

function gifHTML() {
  let gifs_string = store.gifs.map(gif => {return gif}).join("")
  // debugger;
  $("body #slick-slider").append(gifs_string)
}


function reRenderChatBoxHTML(chatRoom) {
  $("body #chat-scroll").empty().append(getCommentsHTML(chatRoom.id))
}

function getCommentsHTML(chatId) {
  let filteredComments = getCommentsById(chatId)
  return filteredComments.map(comment => {
    return `<li id="comment${comment.id}" class="random-border">${comment.text}</li>`
  }).join("")
}

function getCommentsById(commentId){
  return store.comments.filter(comment => {
    return comment.chat_id === commentId
  })
}
