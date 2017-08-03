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
      resp.json()
    }).
      then( data => {
        store.users.push(data);
        console.log(`${username} was added to the store`);
      })

    // console.log(`${username} was added to the database`)

    render(chatRoomsHTML(), "body")

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
