class User < ActiveRecord::Base
  # Include default devise modules.
  has_one :cart 
  after_create :create_cart

  def create_cart
    cart = Cart.create(user_id: self.id)
  end



  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
