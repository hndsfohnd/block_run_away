class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks do |t|
      t.string :transactiondata
      t.string :beforehash
      t.string :selfhash

      t.timestamps
    end
  end
end
