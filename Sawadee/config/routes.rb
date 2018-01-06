Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus, only: :index
    resources :items, only: :index
    resources :carts, only: [:index, :update, :create]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
