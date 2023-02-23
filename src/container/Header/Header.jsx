import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading tittle ='Chase the new flavour' />
      <h1 className='app__header-h1'>The Best Grilled Fish In Town</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>A recipe has no soul, you as the cook, must bring soul to the recipe. Serving you flavourfull fresh Oceanic fish since 2011. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img' >
      <img src={images.ikanputih} alt="header img" style={{ width: '95%'}}/>
    </div>
  </div>
);

export default Header;
