import React from 'react';

function Dashboard({ children }) {
  return (
    <React.Fragment>
      <div className='dashboard'>{children}</div>
    </React.Fragment>
  );
}

export default Dashboard;
