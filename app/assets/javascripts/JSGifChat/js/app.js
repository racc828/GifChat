const store = {users: [], chats: [], comments: []}

$(document).ready(function(){
  render(loginHTML(), "body")
  checkIfUserExists();
  submitUserForm();
  getChatRooms();
  getChatsHTML();
  submitChatRoom();
  joinChatRoom();
  submitComment();
  goBack()
})

function render(html, into) {
  $(`${into}`).empty()
  $(`${into}`).append(html)
}

function reRender(html, into) {
  $(`${into}`).append(html)
}
