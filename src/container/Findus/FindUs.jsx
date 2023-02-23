import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div>
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading tittle='Contact' />
        <h1 className='headtext__cormorant' style ={{marginBottom: '3rem'}}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Ruko Green Land Blok C No.5 & 6, Teluk Tering, Batam Center</p>
          <p className='p__cormorant' style={{ color: '#DCCA87' , margin: '2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'>Mon - Sat: 11:00am - 14:00am | 17:00am - 22:00am</p>
          <p className='p__opensans'>Sun: 17:00am - 22:00am</p>
        </div>
        <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
        
      </div>

      <div className='app__wrapper_img'>
        <img src={images.maps} alt='findus' />
      </div>

    </div>
  </div>
);

export default FindUs;
