import React, { Component } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import thailand from '../images/thailand.jpeg';
import food from '../images/food.jpeg';
import '../style.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='container jumbotron'>
          <Header as='h1' textAlign='center' style={{zIndex: 1}}>Sawadee Thai</Header>
          {/* <Image src={thailand} fluid /> */}
          <Image src={food} fluid />
        </div>
        <div>
          <Header as='h2' textAlign='center' className='invite'>Sawadee invites you to her beautiful, new restaurant in downtown Salt Lake City for authentic Thai cuisine.</Header>
        </div>
      </div>
    );
  }
}

export default Home;
