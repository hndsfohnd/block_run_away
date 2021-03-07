class UsersController < ApplicationController
  before_action :find_user, only: :show

  def index 
    @users = User.all
  end

  def show
    @user.following = @user.following
    @user.follower = @user.follower
  end

  def follow_create
    follow = current_user.active_relationships.build(following_id: params[:id])
    redirect_to users_path if follow.save
  end

  def follow_destroy
    follow_cancel = current_user.active_relationships.find_by(following_id: params[:id])
    redirect_to users_path if follow_cancel.destroy
  end

  private

  def find_user
    @user = User.find(params[:id])
  end
end
