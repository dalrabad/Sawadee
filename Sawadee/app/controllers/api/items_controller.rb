class Api::ItemsController < ApplicationController
  def create
    item = current_user.scores.new(item_params)
    if item.save
      render json: item
    else
      render json: {message: "Error"}, status: 422
    end 
  end

  def index
    render json: Item.where(menu_id: params[:menu_id])
  end 

  def update
    item = Item.find(params[:id])
    if item.update(item_params)
      render json: item
    else 
      render json: {message: "Not updated"}, status: 422
    end

  end

  def destory
    item = Item.find(params[:id])
    item.destory
    render json: {message: "Item deleted"}, status: :ok
  end 


  private
    def item_params
      params.require(:item).permit(:name, :description, :price, :category, :size)
    end 
end
