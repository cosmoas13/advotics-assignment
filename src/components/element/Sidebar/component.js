import React from 'react';
import { ICONS } from '../../../configs';
function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
      <div className='sidebar'>
        <div className='icon-sidebar'>
          <img
            src={ICONS.HAMBURGER}
            alt='hamburger'
            className='pointer-cursor'
          />
        </div>
        <div className='icon-sidebar icon-sidebar__active'>
          <div className='box'>
            <img
              src={ICONS.DASHBOARD}
              alt='dashboard'
              className='pointer-cursor'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
