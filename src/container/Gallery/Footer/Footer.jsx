import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../../components';
import { images } from '../../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Ruko Green Land Blok C No.5 & 6, Teluk Tering, Batam Center</p>
        <p className='p__opensans'>0812 705 3381</p>
        <p className='p__opensans'>0811 777 0123</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.logobulog} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon_img" style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
       <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Saturday:</p>
        <p className='p__opensans'>11:00am - 14:00am | 17:00am - 22:00am</p>
        <p className='p__opensans'>Sunday:</p>
        <p className='p__opensans'>17:00am - 22:00am</p>
      </div>
    </div>
    <div className='footer__copyright'></div>
    <p className='p__opensans'>2011 Bulog. All Rights reserved.</p>
  </div>
);

export default Footer;
