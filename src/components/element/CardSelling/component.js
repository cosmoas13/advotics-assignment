import React from 'react';
import { ICONS, MONTH } from '../../../configs';
import { bestSeller } from '../../../constants/dummy';

function CardSelling({ title, days }) {
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
    <div className='card-wrapper'>
      <div className='card-head'>
        <div className='card-title'>{title}</div>
        <img src={ICONS.DOT} alt='icon-dot' />
      </div>
      {bestSeller
        .sort((a, b) => b.price * b.sold - a.price * a.sold)
        .map((item, index) =>
          item.id === compare() ? (
            <div
              key={index}
              className={`card-bodys ${index === 0 && 'card-bodys__active'}`}
            >
              <img
                className={`card-img ${index === 0 && 'card-img__active'}`}
                src={item.img}
                alt='icon-product'
              />
              <div className='card-content'>
                <div>{item.product}</div>
                <div className='card-list'>
                  Rp.{item.price} - [{item.sold}]
                </div>
              </div>
            </div>
          ) : null
        )}
    </div>
  );
}

export default CardSelling;
