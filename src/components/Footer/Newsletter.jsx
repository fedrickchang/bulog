import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading tittle='Newsletter' />
      <h1 className='headtext__cormorant'>20% Off by showing coupon</h1>
      <p className='p__opensans'>Get Your coupon at Hungree now!</p>
    </div>
    {/* <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your e-mail address' />
      <button className='custom__button'>Subscribe</button>
    </div> */}
    
  </div>
);

export default Newsletter;
