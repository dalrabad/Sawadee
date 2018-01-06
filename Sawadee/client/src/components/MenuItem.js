import React, { Component } from 'react';
import { addItem } from '../actions/cartItems';

const MenuItem = ({id, name, description, price, category, size, dispatch}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{size}</h5>
      <p>{description}</p>
      <p>${price}</p>
      <br />
      <button onClick={()=> dispatch(addItem({name, price}))}> Buy </button>

    </div>
  )}

export default MenuItem;