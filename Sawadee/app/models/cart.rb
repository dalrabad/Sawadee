class Cart < ApplicationRecord
  belongs_to :user, dependent: :destroy
  serialize :items, Array
end
