const store = {users: [], chats: [], comments: [], gifs: []}

$(document).ready(function(){
  render(loginHTML(), "body")
  keepFocusOnField("body #username-input");
  checkIfUserExists();
  submitUserForm();
  getChatRooms();
  // getChatsHTML();
  submitChatRoom();
  joinChatRoom();
  submitComment();
  goBack();
})

function render(html, into) {
  $(`${into}`).empty()
  $(`${into}`).append(html)
}

function reRender(html, into) {
  $(`${into}`).append(html)
}

function keepFocusOnField(into) {
  $(`${into}`).focus();
}
