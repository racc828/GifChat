function createUser(){
  idCount = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++idCount
      this.chats = []
      this.comments = []
    }
  }
}

let User = createUser()
