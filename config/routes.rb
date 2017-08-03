Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, :chats, :comments
  get "/", to: "application#index", as: "home"
  get "/check_user/:name", to: "users#check_user", as: 'check_user'

end
