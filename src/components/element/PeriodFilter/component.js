import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import 'moment/min/locales';
import { ICONS } from '../../../configs';

function PeriodFilter({ handleChange }) {
  const [days, setDays] = useState(7);
  const [fromDate, setFromDate] = useState(moment().subtract(7, 'days'));
  const [toDate, setToDate] = useState(moment().subtract(1, 'days'));
  const [status, setStatus] = useState(false);

  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
    'Last 30 Days': [
      moment().subtract(30, 'days'),
      moment().subtract(1, 'days'),
    ],
    'This Month': [moment().startOf('month'), moment()],
  };

  const start = moment().subtract(7, 'days');
  const end = moment().subtract(1, 'days');
  const minDate = moment().subtract(6, 'month');
  const maxDate = moment().subtract(1, 'days');

  const handleChangePeriod = (e, picker) => {
    const days =
      moment(picker.endDate._d.toISOString()).diff(
        moment(picker.startDate._d.toISOString()),
        'days'
      ) + 1;

    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
    setDays(days);

    handleChange(days);
  };

  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <DateRangePicker
      initialSettings={{
        startDate: start,
        endDate: end,
        ranges: range,
        opens: 'left',
        alwaysShowCalendars: true,
        minDate: minDate,
        maxDate: maxDate,
      }}
      onEvent={handleChangePeriod}
    >
      <div className='period-wrapper' onClick={handleClick}>
        <div className='period-title'>Dashboard</div>
        <div className='period-filter'>
          <div className='period-left'>
            <img src={ICONS.CALENDAR} alt='icon-calendar' />
            <div>Period</div>
          </div>
          <div className='period-right'>
            <div className='period-calendar'>
              {moment(fromDate)
                .locale('id')
                .format('LL')}{' '}
              -{' '}
              {moment(toDate)
                .locale('id')
                .format('LL')}
            </div>
            <img src={status ? ICONS.DOWN : ICONS.UP} alt='icon-arrow' />
          </div>
        </div>
      </div>
    </DateRangePicker>
  );
}

export default PeriodFilter;
