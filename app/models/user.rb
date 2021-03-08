class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  
  has_many :active_relationships, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy 
  has_many :following, through: :active_relationships

  has_many :possive_relationships, class_name: "Relationship", foreign_key: "following_id", dependent: :destroy
  has_many :follower, through: :possive_relationships


  has_many :posts

  def following?(user)
    self.following.include?(user)
  end

  def follower?(user)
    follower.include?(user)
  end
end
