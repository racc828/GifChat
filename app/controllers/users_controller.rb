class UsersController < ApplicationController

  # before_action :set_user, only: [:check_user]

  def create
    user = User.create(user_params)

    render json: user


    # render json:{
    #   id:user.id,
    #   name:user.name,
    #   chats: user.chats,
    #   created_at: user.created_at,
    #   updated_at: user.updated_at
    # }

  end

  def check_user
    user = User.find_by(name: params[:name])
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

  # def set_user
  #   user = User.all.find(params[:id])
  # end


end
