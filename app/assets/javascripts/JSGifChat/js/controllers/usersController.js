function submitUserForm(){
  $('#add-user').on('submit', function(event){
    event.preventDefault();

    let username = $('#username-input').val()

    let userForm = {
      user: {
        name: `${username}`
      }
    }

    let url = "http://localhost:3000/users/"

    let  headers = new Headers
    headers.set('Content-Type', 'application/json')


    let config = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userForm)
    }


    let request = fetch(url, config)


    request.then( resp => {
      return resp.json()
    }).
      then( data => {
        if(data.id === null){
          console.log("Username already exists")
          render(loginHTML(), "body")
          $('#username-input').val(username)
          submitUserForm();
        }
        else{
          store.users.push(data);
          console.log(`${username} was added to the store`);
          getAllComments();
          render(chatRoomsHTML(), "body")
        }
      })

    // console.log(`${username} was added to the database`)

  })

}


function checkIfUserExists(){
  $('#add-user').on('keyup', function(event){

    let usernameToCheck = $('#username-input').val()

    let url8 = `http://localhost:3000/check_user/${usernameToCheck}`

    let  headers8 = new Headers
    headers8.set('Content-Type', 'application/json')

    let config8 = {method: "GET", headers: headers8}
    let request8 = fetch(url8, config8)
    let userList = request8.then( resp =>
      resp.json() ).
        then( data => {
          if(data === null){
            $('#valid-username').empty()
            $('#invalid-username').empty()
            $('#valid-username').append("Valid Username")
            $('.btn').show()
          }
          else{
            $('#valid-username').empty()
            $('#invalid-username').empty()
            $('#invalid-username').append("Invalid Username")
            $('.btn').hide()
          }
        })

  })
}


// function updateUserChat(user_obj) {
//   let url4 = `http://localhost:3000/users/${user_obj.id}`
//
//     let userForm = {user:{:chats `${chatRoomInput}`}}
//
//   let  headers4 = new Headers
//   headers4.set('Content-Type', 'application/json')
//
//   let config4 = {method: "PATCH", headers: headers4, body: JSON.stringify(userForm) }
//   let request4 = fetch(url4,config4)
//   request4.then( resp => resp.json() ).
//       then(data => {console.log(data)})
//
// }
