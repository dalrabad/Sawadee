import React, { Component } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import thailand from '../images/thailand.jpeg';
import food from '../images/food.jpeg';
import '../style.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Sawadee Thai</h1>
        <div className='container jumbotron'>
          <Image className="image" src={food} fluid />
        </div>
        <div>
          <Header as='h2' textAlign='center' className='invite'>Sawadee invites you to her beautiful, new restaurant in downtown Salt Lake City for authentic Thai cuisine.</Header>
        </div>
      </div>
    );
  }
}

export default Home;
