function createComment(){
  idCount = 0
  return class Comment {
    constructor(text){
      this.text = text
      this.chat_id =
      this.id = ++idCount
    }
  }
}

let Comment = createComment()
