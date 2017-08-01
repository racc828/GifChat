function createChat(){
  idCount = 0
  return class Chat {
    constructor(name){
      this.name = name
      this.id = ++idCount
    }
  }
}

let Chat = createChat()
