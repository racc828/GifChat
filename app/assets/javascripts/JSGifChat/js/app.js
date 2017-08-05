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
  filterChatroom();
  submitComment();
  toggleGif();
  submitGifComment();
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

function runSlickSliderCenterFocus() {
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
}
