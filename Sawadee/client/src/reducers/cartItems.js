import axios from 'axios';

const carItems = (state= [], action ) => {
  switch (action.type) {
      case 'GET_CART_ITEMS':
        return action.cartItems;
      case 'ADD_CART_ITEM':
        return [action.cartItem, ...state]
      default:
        return state;

  }
}

export default carItems;