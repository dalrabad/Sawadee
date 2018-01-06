import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenus, changeMenu } from '../actions/menus';

class menuList extends Component {

  componentDidMount() {
    this.props.dispatch(getMenus())
  }

  render() {
    return (
      <div>
       { this.props.menus.map( menu => (
           <ul>
             <button onClick={()=> this.props.dispatch(changeMenu(menu.id))}> {menu.name} </button>
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