import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import menus from './menus';
import menuItems from './menuItems';
import selectedMenu from './selectedMenu';
import cartItems from './cartItems';

const rootReducer = combineReducers({
  user,
  flash,
  menus,
  menuItems,
  selectedMenu,
  cartItems,
});

export default rootReducer;
