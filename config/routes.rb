Rails.application.routes.draw do
  root 'runaways#index'
  resources :runaways, only: [:index] do
    collection do
      get 'difficult1'   
      get 'difficult2' 
      get 'difficult3'
    end 
  end
end