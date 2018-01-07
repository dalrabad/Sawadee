import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenus, changeMenu } from '../actions/menus';

class menuList extends Component {

  componentDidMount() {
    this.props.dispatch(getMenus())
  }

  render() {
    return (
      <div className="menuList">
       { this.props.menus.map( menu => (
           <ul>
             <li className="menuItem" onClick={()=> this.props.dispatch(changeMenu(menu.id))}> {menu.name} </li>
            </ul>
       ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    menus: state.menus,
  }
}

export default connect(mapStateToProps)(menuList);