class ChatsController < ApplicationController

  def index
    chats = Chat.all
    render json: chats
  end

  def create
    chat = Chat.create(chat_params)
    render json:{
      name:chat.name,
      id:chat.id, 
      comments: chat.comments,
      created_at: chat.created_at,
      updated_at: chat.updated_at
    }
    # render json: chat
  end

  private

  def chat_params
    params.require(:chat).permit(:name)
  end

end
