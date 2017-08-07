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

function owlCarousel() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
}

checker = false
