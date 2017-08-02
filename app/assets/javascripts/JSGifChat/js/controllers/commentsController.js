function submitComment() {
  $("body").on("submit", "#add-comment", function(event){
    event.preventDefault()
    let commentsInput = $("#add-comments-input").val()
    console.log(commentsInput)

    let commentsForm = {comment:{text: `${commentsInput}`}}

    let url6 = "http://localhost:3000/comments/"

    let  headers6 = new Headers
    headers6.set('Content-Type', 'application/json')

    let config6 = {method: "POST", headers: headers6, body: JSON.stringify(commentsForm) }
    let request6 = fetch(url6,config6)
    request6.then( resp => resp.json() ).
        then(data => {store.users[0].chats[0].comments.push(data)}).
          then(() => { render(chatRoomHTML(), "body")})
  })
}
