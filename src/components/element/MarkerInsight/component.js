import React, { useState } from 'react';
import { ICONS } from '../../../configs';
import Sales from '../Sales';
import AverageChart from '../AverageChart';
import CardSelling from '../CardSelling';

function MarkerSight({ days }) {
  const [status, setStatus] = useState(true);
  const handleChange = () => {
    setStatus(!status);
  };

  return (
    <React.Fragment>
      <div className='marker-wrapper'>
        <div className='marker-title'>Marker Insights</div>
        <div className='marker-box'>
          <div className='marker-icon-left'>
            <img src={ICONS.HELP} alt='icon-help' />
            <a href='/#'>Click Here for Help</a>
          </div>
          <div className='marker-icon-right' onClick={handleChange}>
            <img src={status ? ICONS.DOWN : ICONS.UP} alt='icon-accordion' />
          </div>
        </div>
      </div>
      {status && (
        <React.Fragment>
          <Sales days={days} />
          <div className='wrapper-monitor'>
            <AverageChart />
            <CardSelling title='BEST SELLING SKU' days={days} />
            <CardSelling title='TOP COMPETITOR SKU' days={days} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default MarkerSight;
