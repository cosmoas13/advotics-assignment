import React, { useState } from 'react';
import { ICONS, getRandomValues } from '../../../configs';
import Chart from './ChartBar';
import Select from 'react-select';

const options = [
  { value: '0', label: 'Last 7 Days' },
  { value: '1', label: 'Last 30 Days' },
  { value: '2', label: 'This Month' },
];

function AverageChart() {
  const [values, setValues] = React.useState([
    getRandomValues(),
    getRandomValues(),
    getRandomValues(),
    getRandomValues(),
    getRandomValues(),
  ]);

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (e) => {
    setSelectedOption({ [e.label]: e.value });
    setValues([
      getRandomValues(),
      getRandomValues(),
      getRandomValues(),
      getRandomValues(),
      getRandomValues(),
    ]);
  };

  return (
    <div className='chart-wrapper'>
      <div className='chart-header'>
        <div className='chart-title'>Average Purchase Value</div>
        <div className='chart-dropdown'>
          <Select
            options={options}
            defaultValue={options[0]}
            onChange={handleChange}
          />
          <img src={ICONS.DOT} alt='icon-dot' />
        </div>
      </div>
      <Chart
        dataNett={values[0]}
        dataGross={values[1]}
        dataAPV={values[2]}
        dataUPT={values[3]}
        dataLine={values[4]}
      />
    </div>
  );
}

export default AverageChart;
