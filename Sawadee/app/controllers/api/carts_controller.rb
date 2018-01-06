class Api::CartsController < ApplicationController

    def index
        render json: current_user.cart
    end     

    def create
       item =  current_user.cart.items.push(item_params)    
    end 

    private
        def item_params
            params.require(:item).permit(:name, :price)
        end 
end
