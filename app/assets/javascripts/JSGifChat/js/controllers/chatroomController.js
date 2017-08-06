function getChatRooms() {
  let url3 = "http://localhost:3000/chats/"

  let  headers3 = new Headers
  headers3.set('Content-Type', 'application/json')

  let config3 = {
    method: "GET",
    headers: headers3
  }

  let request3 = fetch(url3, config3)

  let chatHTMLList = request3.then( resp => { return resp.json() } ).then( data => {data.forEach( obj => { store.chats.push(obj) }) })

}


function submitChatRoom() {
  $("body").on("submit", "#add-chat", function(event){

    event.preventDefault()
    let chatRoomInput = $("#chat-room-name").val()
    console.log(chatRoomInput)

    let chatForm = {chat:{name: `${chatRoomInput}`}}

    let url2 = "http://localhost:3000/chats/"

    let  headers2 = new Headers
    headers2.set('Content-Type', 'application/json')

    let config2 = {method: "POST", headers: headers2, body: JSON.stringify(chatForm) }
    let request2 = fetch(url2,config2)
    request2.then( resp => resp.json() ).
        then(data => {store.chats.push(data)}).
          then(() => {
            render(chatRoomsHTML(), "body");
          })

  })
}

function joinChatRoom(){

  $("body").on("click", ".chat-room li", function(event){
    event.preventDefault();

    let chatToAdd = getChat(this)
    // getComments(chatToAdd)
    // store.users[0].chats.push(chatToAdd
    new_interval(chatToAdd)
    render(chatRoomHTML(chatToAdd), "body");
    let gifInputValue = $("body #add-comments-input").val()
    // debugger;
    getGifs(gifInputValue);
    // debugger;
    keepFocusOnField("body #add-comments-input");
    automaticScroll();
    getNewGifs();

  })
}

function filterChatroom(){
  $("body").on("keyup", "#find-chat-room", function(event){

    let filterWord = $('#find-chat-room').val()

    let allChats = store.chats.filter(chat => {
      return chat.name.includes(filterWord)
    })

    $("body .chat-room").empty()
    $("body .chat-room").append(getFilteredChatsHTML(allChats))

    // filterChats $("body #chat7").contents()[1]
  })
}


function new_interval(chatRoom) {
   intervalId = setInterval(function(){
     removeAllComments();
     getAllComments().
     then(() => {reRenderChatBoxHTML(chatRoom)
    } )
  }, 1000);
 }


function removeAllComments() {
  store.comments = []
}

function getChat(chatObject){
  console.log("Joining Chat")
  // console.log(thisChat.id.slice(-1))
  let idToFind = parseInt(chatObject.id.replace(/\D+/g, ''))
  let foundChat = findChatById(idToFind)
  return foundChat[0]
}

function findChatById(chatId){
  return store.chats.filter(chat => {return chat.id === chatId})
}

function findChatByName(chatName){
  return store.chats.filter(chat => {return chat.name === chatName})[0]
}

function goBack(){
  $("body").on("click", "#back", function(event){
    event.preventDefault();
    clearInterval(intervalId)
    removeAllComments()
    getAllComments()
    $("body #slick-slider").empty()
    store.gifs = []
    render(chatRoomsHTML(), "body")
    keepFocusOnField("body #chat-room-name")
  })
}
