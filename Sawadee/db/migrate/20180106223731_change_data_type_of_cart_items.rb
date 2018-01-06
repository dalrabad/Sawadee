class ChangeDataTypeOfCartItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :carts, :name
    add_column :carts, :items, :text
  end
end
