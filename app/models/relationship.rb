class Relationship < ApplicationRecord
  belongs_to :following, class_name :"User"
end
