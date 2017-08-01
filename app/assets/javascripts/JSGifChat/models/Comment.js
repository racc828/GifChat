function createComment(){
  idCount = 0
  return class {
    constructor(text){
      this.text = text
      this.chat_id =
      this.id = ++idCount
    }
  }
}

let Comment = createComment()
