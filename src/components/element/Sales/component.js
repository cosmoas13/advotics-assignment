import React from 'react';
import { ICONS, MONTH } from '../../../configs';
import { salesOverTurn } from '../../../constants/dummy';

function Sales({ days }) {
  const compare = () => {
    if (days === 1) {
      return 1;
    } else if (days === 7) {
      return 2;
    } else if (days === 30) {
      return 3;
    } else if (days < MONTH) {
      return 4;
    } else if (days > MONTH) {
      return 5;
    }
  };

  return (
    <div className='sales-wrapper'>
      <div className='sales-box'>
        <div className='sales-title'>Sales Turnover</div>
        <div className='sales-img'>
          <img src={ICONS.DOT} alt='icon-dot' />
        </div>
      </div>
      {salesOverTurn.map((item, index) =>
        item.id === compare() ? (
          <div className='sales'>
            <div className='sales-currency'>
              <div className='sales-total'>{item.total}</div>
              <div className='sales-percentage'>
                <img src={ICONS.ARROW} alt='icon-arrow' /> {item.percentage} %{' '}
                <span>last period in products sold</span>
              </div>
            </div>
            <div className='sales-icon'>
              <img src={ICONS.SHOP} alt='icon-shop' />
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Sales;
