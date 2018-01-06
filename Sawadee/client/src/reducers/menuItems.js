import axios from 'axios';

const menuItems = (state= [], action ) => {
  switch (action.type) {
      case 'GET_ITEMS':
        return action.items;
      default:
        return state;

  }
}

export default menuItems;