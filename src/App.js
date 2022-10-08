import React from 'react';
import Header from './components/element/Header';
import Marker from './components/element/MarkerInsight';
import PeriodFilter from './components/element/PeriodFilter/component';
import Sidebar from './components/element/Sidebar';
import Dashboard from './components/layout/Dashboard/component';
function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='dashboard-wrapper'>
        <Sidebar />
        <Dashboard>
          <PeriodFilter />
          <Marker />
        </Dashboard>
      </div>
    </React.Fragment>
  );
}
export default App;
