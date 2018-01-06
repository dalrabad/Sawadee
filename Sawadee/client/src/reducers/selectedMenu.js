import axios from 'axios';

const selectedMenu = (state= 1, action ) => {
  switch (action.type) {
      case 'CHANGE_MENU':
        return action.menu_id;
      default:
        return state;

  }
}

export default selectedMenu;