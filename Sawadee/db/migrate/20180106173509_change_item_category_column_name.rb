class ChangeItemCategoryColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :items, :cateogry, :category

  end
end
