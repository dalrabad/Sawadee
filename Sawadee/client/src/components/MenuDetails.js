import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/menuItems';
import MenuItem from './MenuItem';

class menuDetails extends Component {

  componentDidMount() {
    this.props.dispatch(getItems(this.props.selectedMenu))
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.selectedMenu !== this.props.selectedMenu)
        this.props.dispatch(getItems(nextProps.selectedMenu))
  }

  render() {
    return (
      <div className="menuDetails" >
       { this.props.items.map( item => (
           <MenuItem 
            id = {item.id}
            name = {item.name}
            description = {item.description}
            price={item.price}
            category={item.category}
            key = {item.id}
            dispatch = {this.props.dispatch}
            />
       ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    items: state.menuItems,
    selectedMenu: state.selectedMenu
  }
}

export default connect(mapStateToProps)(menuDetails);