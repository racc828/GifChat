function createComment(){
  idCount = 0
  return class {
    constructor(text, userId, chatId){
      this.text = text
      this.id = ++idCount
      this.userId = userId
      this.chatId = chatId
    }
  }
}

let Comment = createComment()
