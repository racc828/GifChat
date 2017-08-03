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


function getAllComments(){

  let url11 = "http://localhost:3000/comments/"

  let  headers11 = new Headers
  headers11.set('Content-Type', 'application/json')

  let config11 = {method: "GET", headers: headers11}
  let request11 = fetch(url11, config11)

  return request11.then( resp => resp.json() ).
    then( data => {
       return data.forEach( obj => { store.comments.push(obj)
    })
  })
}

function getComments(chatObj){

  let url10 = "http://localhost:3000/comments/"

  let  headers10 = new Headers
  headers10.set('Content-Type', 'application/json')

  let config10 = {method: "GET", headers: headers10}
  let request10 = fetch(url10, config10)

  let CommentHTMLList = request10.then( resp => resp.json() ).
    then( data => {
      let allFilteredComments = filterComments(data, chatObj.id);
      return allFilteredComments.forEach( obj => { store.comments.push(obj)
    })
  })
}

function filterComments(commentsArray, chatId){
  return commentsArray.filter( comment => {
    return comment.chat_id === chatId
  })
}
