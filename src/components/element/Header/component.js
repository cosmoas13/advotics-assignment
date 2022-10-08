import React from 'react';
import { ICONS, IMAGES } from '../../../configs';

function Header() {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-left'>
          <img src={IMAGES.ADVOTICS} alt='advotics-left' />
          <div className='image-advotics-right'>
            <p>powered by &nbsp;</p>
            <img src={IMAGES.ADVOTICS} alt='advotics-right' />
          </div>
        </div>
        <div className='header-right'>
          <div className='right-name'>
            <h4>Username</h4>
            <h5>Company Name</h5>
          </div>
          <img
            className='icon-profile'
            src={ICONS.PROFILE}
            alt='icon-profile'
          />
          <img className='icon-logout' src={ICONS.LOGOUT} alt='icon-logout' />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
