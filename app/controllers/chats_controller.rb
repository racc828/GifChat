class ChatsController < ApplicationController

  before_action :set_chat ,only: [:show]

  def index
    @chats = Chat.all
  end

  def new
    @chat = Chat.new
  end

  def create
    @chat = Chat.new(chat_params)
    @chat.save
    redirect_to chat_path(@chat)
  end

  def show

  end


  private

  def chat_params
    params.require(:chat).permit(:name)
  end

  def set_chat
    @chat = Chat.find(params[:id])
  end

end
