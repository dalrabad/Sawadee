import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import about from '../images/about.jpeg';

const AboutUs = () => {
    return (
    <div>
        <div class="ui grid"> 
            <div class="three column row">
                <div class="column">
                    <Image src={about} fluid />
                </div>
                <div class="column">
                    <Header as='h2'>About Sawadee</Header>
                    <p>
                    As a gourmet chef, Sawadee will treat your taste buds to the finest in Thai cooking. Of her cooking, City Weekly Magazine praised Sawadee's cooking as, "The most authentic Thai eating experience in Utah." The Deseret News said of Sawadee's cooking, "I suggest it heartily for seasoned Thai lovers and newbies alike." Writer Joan Oviatt has declared, "Sawadee is by far my favorite Thai chef. Her dishes delight the palate."
                    <br />
                    <br />
                    Indulge yourself in the classic cuisine Sawadee offers. Many people think of Thai food as spicy. In truth dishes run the gamut from pleasantly mild to piquantly spicy. At Sawadee Thai Restaurant individual dishes are adjusted to taste with our superb sauces and dips. Sawadee has over 50 dishes on her menu including classic Pad Thai with shrimp and crisp vegetables, seafood with zesty Nam Phrik chili sauce, Barbecued chicken or Skewered pork with sweet Nam Jim Kai sauce. For the curry lover, Sawadee prepares red, yellow and green curry dishes, each with their subtle differences. Sawadee Thai Restaurant is truly an adventure.
                    </p>
                </div>
                <div class="column">
                    <Header as='h2'>Recognitions and Awards
                    </Header>
                    <ul>
                        <li><strong>City Weekly</strong> - "The most authentic Thai eating experience in Utah."</li>
                        <br />
                        <li><strong>City Weekly</strong> - "Fantastic flavors found at friendishly low prices."</li>
                        <br />
                        <li><strong>Deseret News</strong> - "I suggest it heartily for seasoned Thai lovers and newbies alike."</li>
                        <br />
                        <li><strong>Salt Lake Magazine</strong> - "The friendliest restaurateurs in the city."</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default AboutUs;