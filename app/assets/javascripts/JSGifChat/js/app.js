const store = {users: [], chats: [], comments: []}

$(document).ready(function(){
  render(loginHTML(), "body")
  submitUserForm();
  getChatRooms();
  getChatsHTML();
  submitChatRoom();
  joinChatRoom();
  submitComment();
})

function render(html, into) {
  $(`${into}`).empty()
  $(`${into}`).append(html)
}

function reRender(html, into) {
  $(`${into}`).append(html)
}