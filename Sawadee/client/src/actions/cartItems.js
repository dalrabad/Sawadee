import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getItems = () => {
    return dispatch => {
      axios.get('/api/carts')
        .then( res => {
          dispatch({ type: 'GET_CART_ITEMS', cartItems: res.data });
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get cart items', 'red'));
        })
    }
  }

export const addItem = (item) => {
  return dispatch => {
    axios.post('/api/carts', {item})
      .then( res=> {
        dispatch({ type: 'ADD_CART_ITEM', item: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch(err => {
        dispatch(setFlash('Failed to create item', 'red'));
      })
    }
}