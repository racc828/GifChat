class CommentsController < ApplicationController


  def index
    comments = Comment.all
    render json: comments
  end

  def create
    comment = Comment.create(comment_params)
    render json:{
      text:comment.text,
      id:comment.id,
      user_id: comment.user_id,
      chat_id: comment.chat_id,
      created_at: comment.created_at,
      updated_at: comment.updated_at
    }
    # render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :user_id, :chat_id)
  end



end
