import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getMenus = () => {
    return dispatch => {
      axios.get('/api/menus')
        .then( res => {
          dispatch({ type: 'GET_MENUS', menus: res.data });
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get menus', 'red'));
        })
    }
  }

export const changeMenu= (id) => {
  return dispatch => {
    dispatch({ type: 'CHANGE_MENU', menu_id: id });
  }
}