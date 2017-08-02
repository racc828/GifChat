class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    # @chats = user.chats
    render json:{
      id:user.id,
      name:user.name,
      chats: user.chats,
      created_at: user.created_at,
      updated_at: user.updated_at
    }
    # render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end


end
