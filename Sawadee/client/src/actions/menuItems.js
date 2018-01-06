import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getItems = (selectedMenu) => {
    return dispatch => {
      axios.get(`/api/items?menu_id=${selectedMenu}`)
        .then( res => {
          dispatch({ type: 'GET_ITEMS', items: res.data });
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get items', 'red'));
        })
    }
  }