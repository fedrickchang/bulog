import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.me} alt="chef" />
    </div>

      <div className='app__wrapper_info'>
        <SubHeading tittle='Owner’s Word'/>
        <h1 className='headtext__cormorant'>What we believe in</h1>
      
        <div className='app__chef-content'>
          <div className='app_chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Sipasipasi pasisipasi sipapasi pasipapasi.</p>
            <p className='p__opensans'>You don't need a golden fork to eat good food.</p>
            {/* <p className='p__opensans'>I'm not a chef. But i'm passionate about food - the tradition of it, cooking it, and sharing it.</p> */}
          </div>
        </div>

        <div className='app__chef-sign'>
          <p>Fedrick</p>
          <p className='p__opensans'>Owner & CFO</p>
          <img src={images.ttd} alt="sign" />
        </div>

      </div>

    
  </div>
);

export default Chef;
