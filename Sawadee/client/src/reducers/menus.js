import axios from 'axios';

const menus = (state= [], action ) => {
  switch (action.type) {
      case 'GET_MENUS':
        return action.menus;
      default:
        return state;

  }
}

export default menus;