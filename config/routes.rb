Rails.application.routes.draw do
  root 'blocks#index'
  resources :runaways, only: [:index] do
    collection do
      get 'difficult1'
      get 'difficult2'
      get 'difficult3'
    end 
  end

  resources :blocks,only: [:index, :new, :create]
 
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'
  }
  devise_scope :user do
    get "signup", :to => "users/registrations#new"
    get "login", :to => "users/sessions#new"
    get "logout", :to => "users/sessions#destroy"
  end

  resources :users, only: [:index, :show] do 
    member do
      get :follow_create
      get :follow_destroy
      get :follower
    end
  end

  resources :posts
  
end