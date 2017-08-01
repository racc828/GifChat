const store = {users: [], chats: [], comments: []}

$(document).ready(function(){
  render(loginHTML(), "body")
  submitUserForm();
  getChatRooms();
  getChatsHTML();
  submitChatRoom();
})

function render(html, into) {
  $(`${into}`).empty()
  $(`${into}`).append(html)
}
