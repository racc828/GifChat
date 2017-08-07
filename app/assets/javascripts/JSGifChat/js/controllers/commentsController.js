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
          then(() => {
            render(chatRoomHTML(newchatroom), "body");
            let gifSearchQuery = $("body #gif-query").val()
            getGifs(gifSearchQuery);
            automaticScroll();
            keepFocusOnField("body #add-comments-input");
          })
  })
}

function submitGifComment() {
  $("body").on("click", ".gif-slider", function(event){

    let currentChatroomName = $('#chatroom-name')[0].innerText

    let foundChatroom = findChatByName(currentChatroomName)

    let newCommentInput = this.innerHTML

    console.log(newCommentInput)

    let commentsForm = {comment:{text: `${newCommentInput}`, user_id:`${store.users[0].id}`, chat_id:`${foundChatroom.id}`}}

    let url14 = "http://localhost:3000/comments/"

    let  headers14 = new Headers
    headers14.set('Content-Type', 'application/json')

    let config14 = {method: "POST", headers: headers14, body: JSON.stringify(commentsForm) }
    let request14 = fetch(url14,config14)
    request14.then( resp => resp.json() ).
        then(data => {store.comments.push(data)}).
          then(() => {
            render(chatRoomHTML(foundChatroom), "body");
            let gifSearchQuery2 = $("body #gif-query").val()
            getGifs(gifSearchQuery2);
            automaticScroll();
            keepFocusOnField("body #add-comments-input");
          })
  })
}

// function sendGifOnClick(){
//   $("body").on("click",".gif-slider", function(event){
//     console.log(this.innerHTML)
//   })
// }


function getAllComments(){

  let url11 = "http://localhost:3000/comments/"

  let  headers11 = new Headers
  headers11.set('Content-Type', 'application/json')

  let config11 = {method: "GET", headers: headers11}
  let request11 = fetch(url11, config11)

  return request11.then( resp => resp.json() ).
    then( data => {
       return data.forEach( obj => {
         store.comments.push(obj)
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

function automaticScroll() {
  $("body #chat-scroll").scrollTop($("body #chat-scroll")[0].scrollHeight);
}



function getGifs(searchTerm=""){

  // let gifs = []

  store.gifs = []

  if(searchTerm === ""){
    searchTerm = $('body #chatroom-name').text()
  }

  // debugger;

  let gifQuery = searchTerm.split(' ').join('+')

  // debugger;

  let url12 = `http://api.giphy.com/v1/gifs/search?q=` + `${gifQuery}` + `&api_key=f2d65e9d48754d739f8eabee2f011f0c`

  let  headers12 = new Headers
  headers12.set('Content-Type', 'application/json')

  let config12 = {
    method: "GET",
    headers: headers12
  }

  let request12 = fetch(url12, config12)

  return request12.then( resp => resp.json() ).
    then( data => {
      return data.data.forEach(obj => {
        store.gifs.push(`<div class="gif-slider"><img src="${obj.images.preview_gif.url}"></div>`)
      })
    }).
    then(() => gifHTML())

  // gifs.forEach(gif => {
  //   debugger;
  //   $("body").append(gif)
  // })

}

function getNewGifs(){
  $('body').on('click', '#get-new-gifs', function(event){
    // console.log("typing something")
    let gifSearchTerm = $('body #gif-query').val()
    render(chatRoomHTML(findChatByName($('body #chatroom-name')[0].innerText)), "body")
    store.gifs = []
    getGifs(gifSearchTerm)

  })
}

function toggleGif() {
  $("body").on("click","#gif-toggle", function(event){
    $("body #slider-container").slideToggle( "slow")
    $("body .toggle-comment-form").toggleClass("hide-form")
    $("body .toggle-gif-search").toggleClass("display-form")
    owlCarousel()
  })

}




// function randomBorderColor() {
//   var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   $("body .random-border").css("border-color", "#" + randomColor)
// }
