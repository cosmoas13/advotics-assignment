import React from 'react';
import { ICONS } from '../../../configs';

function Sales() {
  return (
    <div className='sales-wrapper'>
      <div className='sales-box'>
        <div className='sales-title'>Sales Turnover</div>
        <div className='sales-img'>
          <img src={ICONS.DOT} alt='icon-dot' />
        </div>
      </div>
      <div className='sales'>
        <div className='sales-currency'>
          <div className='sales-total'>3,600,000</div>
          <div className='sales-percentage'>
            <img src={ICONS.ARROW} alt='icon-arrow' /> 13.8 %{' '}
            <span>last period in products sold</span>
          </div>
        </div>
        <div className='sales-icon'>
          <img src={ICONS.SHOP} alt='icon-shop' />
        </div>
      </div>
    </div>
  );
}

export default Sales;
