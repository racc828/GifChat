function createChat(){
  idCount = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++idCount
      this.users = []
      this.comments = []
    }
  }
}

let Chat = createChat()
