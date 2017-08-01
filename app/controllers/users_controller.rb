class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    # render json:{name:user.name,id:user.id}
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end


end
