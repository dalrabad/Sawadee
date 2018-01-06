import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className='footer'>
        <div class="ui grid"> 
            <div class="three column row">
                <div class="column">
                    801-EAT-THAI (801-328-8424)
                    <br />
                    754 East South Temple Street
                    <br />
                    Salt Lake City, UTAH 84102
                </div>
                <div class="column">
                    <a href='https://www.facebook.com/sawadeeutah'>Facebook</a>
                    <br />
                    <a href='https://www.instagram.com/explore/locations/404132/sawadee-utah-thai-restaurant/'>Instagram</a>
                </div>
                <div class="column">
                    <Link to ='/'>Home</Link>
                    <br />
                    <Link to ='/aboutus'>About Us</Link>
                    <br />
                    <Link to ='/menus'>Menu</Link>
                </div>
            </div>
        </div>
    </div>
)}

export default Footer;