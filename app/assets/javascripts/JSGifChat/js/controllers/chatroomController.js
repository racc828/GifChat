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
    request2.then( resp => resp.json() ).then( data => {store.chats.push(data)} )
    render(chatRoomHTML(), "body")
    debugger

  })
}
