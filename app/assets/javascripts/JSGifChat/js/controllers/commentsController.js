function submitComment() {
  $("body").on("submit", "#add-comment", function(event){
    event.preventDefault();
    let chatroomName = $('#chatroom-name')[0].innerText

    let newchatroom = findChatByName(chatroomName)

    let commentsInput = $("#add-comments-input").val()
    console.log(commentsInput)

    let commentsForm = {comment:{text: `${commentsInput}`, user_id:`${store.users[0].id}`, chat_id:`${newchatroom.id}`}}

    let url6 = "http://localhost:3000/comments/"

    let  headers6 = new Headers
    headers6.set('Content-Type', 'application/json')

    let config6 = {method: "POST", headers: headers6, body: JSON.stringify(commentsForm) }
    let request6 = fetch(url6,config6)
    request6.then( resp => resp.json() ).
        then(data => {store.comments.push(data)}).
          then(() => { render(chatRoomHTML(newchatroom), "body")})
  })
}
