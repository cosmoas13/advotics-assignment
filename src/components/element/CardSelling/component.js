import React from 'react';
import { ICONS } from '../../../configs';
import { bestSeller } from '../../../constants/dummy';

function CardSelling({ title }) {
  const compare = () => {
    if (1) {
      return 1;
    } else if (2) {
      return 2;
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
          item.id === 1 ? (
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
