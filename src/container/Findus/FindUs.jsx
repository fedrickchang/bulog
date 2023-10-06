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
        <form action="https://www.google.com/maps/dir//Ikan+Bakar+Bulog,+Greenland,+Komplek+Ruko+Mitra+Raya,+Jl.+Ruko+Greenland+No.05-06,+Teluk+Tering,+Batam+Kota,+Batam+City,+Riau+Islands+29461/@1.124414,104.0449304,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31d9891956982cff:0x73cfb96cedbeb80e!2m2!1d104.0475053!2d1.124414?entry=ttu" method='get' target='_blank'>
          <button className='custom__button' style={{marginTop: '2rem'}} type='submit'>Visit Us</button>
        </form>
        
        
      </div>

      <div className='app__wrapper_img'>
        <img src={images.maps} alt='findus' />
      </div>

    </div>
  </div>
);

export default FindUs;
