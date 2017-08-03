class ChatsController < ApplicationController

  def index
    chats = Chat.all

    # render json: chats

    # new_chats = chats.map do |chat|
    #   # var = ',\"comments\":[]}'
    #   # a = chat.to_json[0..-2]
    #   # a << var
    #   # tester = JSON.parse(a)
    #   chat
    #   byebug
    #   puts "hello"
    # end

    # comments = chats.map do |chat|
    #   chat.comments
    # end

    # byebug

    chats = chats.map do |chat|
      # byebug
      # chat
      {chat: chat, comments: chat.comments}
    end

    render json: {chats: chats, comments: comments }
  end

  def create
    chat = Chat.create(chat_params)
    # {chat: {name: , comments_attributes: [{}]}}
    render json:{
      name:chat.name,
      id:chat.id,
      comments: chat.comments
    }
    # render json: chat
  end

  private

  def chat_params
    params.require(:chat).permit(:name)
  end

end
