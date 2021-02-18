class AddDetialsToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :deadline, :date
    add_column :todos, :status, :string
  end
end
