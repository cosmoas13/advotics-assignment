import React, { useState } from 'react';
import Header from './components/element/Header';
import Marker from './components/element/MarkerInsight';
import PeriodFilter from './components/element/PeriodFilter/component';
import Sidebar from './components/element/Sidebar';
import Dashboard from './components/layout/Dashboard/component';

function App() {
  const [days, setDays] = useState(7);
  const handleChange = (newDays) => {
    setDays(newDays);
  };
  return (
    <React.Fragment>
      <Header />
      <div className='dashboard-wrapper'>
        <Sidebar />
        <Dashboard>
          <PeriodFilter handleChange={handleChange} />
          <Marker days={days} />
        </Dashboard>
      </div>
    </React.Fragment>
  );
}
export default App;
