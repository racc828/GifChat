class ChatsController < ApplicationController

  def index
    chats = Chat.all
    render json: chats
  end

  def create
    chat = Chat.create(chat_params)
    # render json:{name:user.name,id:user.id}
    render json: chat
  end

  private

  def chat_params
    params.require(:chat).permit(:name)
  end

end
