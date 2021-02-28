Rails.application.routes.draw do
  devise_for :users
  root 'blocks#index'
  resources :runaways, only: [:index] do
    collection do
      get 'difficult1'
      get 'difficult2'
      get 'difficult3'
    end 
  end
  resources :blocks,only: [:index, :new, :create]
    
end