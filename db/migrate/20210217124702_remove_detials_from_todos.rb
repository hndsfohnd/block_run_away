class RemoveDetialsFromTodos < ActiveRecord::Migration[5.2]
  def change
    remove_column :todos, :deadline, :date
    remove_column :todos, :status, :string
  end
end
