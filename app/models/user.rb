class User < ApplicationRecord
  has_many :comments
  has_many :chats, through: :user_chats
end
