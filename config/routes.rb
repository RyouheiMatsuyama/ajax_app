Rails.application.routes.draw do
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
<<<<<<< Updated upstream
  get 'posts', to: 'posts#checked'
=======
>>>>>>> Stashed changes
  get 'posts/:id', to: 'posts#checked'
end