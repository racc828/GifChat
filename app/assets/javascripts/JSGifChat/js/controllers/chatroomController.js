function getChatRooms() {
  let url3 = "http://localhost:3000/chats/"

  let  headers3 = new Headers
  headers3.set('Content-Type', 'application/json')

  let config3 = {method: "GET", headers: headers3}
  let request3 = fetch(url3,config3)
  let chatHTMLList = request3.then( resp => resp.json() ).then( data => {data.forEach( obj => { store.chats.push(obj) }) })

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
          then(() => {render(chatRoomsHTML(), "body")})
  })
}

function joinChatRoom(){
  $("body").on("click", ".chat-room li", function(event){
    event.preventDefault();
    let chatToAdd = getChat(this)
    store.users[0].chats.push(chatToAdd)
    render(chatRoomHTML(chatToAdd), "body")
  })
}

function getChat(thisChat){
  console.log("Joining Chat")
  console.log(thisChat.id.slice(-1))
  let idToFind = parseInt(thisChat.id.slice(-1))
  let foundChat = findChatById(idToFind)
  return foundChat[0]
}

function findChatById(chatId){
  return store.chats.filter(chat => {return chat.id === chatId})
}


function wait(text="hello") {
    setTimeout(function(){ console.log(`${text}`) }, 3000);
}
