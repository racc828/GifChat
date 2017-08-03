class Chat < ApplicationRecord

  validates :name, uniqueness: true

  has_many :user_chats
  has_many :users, through: :user_chats
  has_many :comments
end
