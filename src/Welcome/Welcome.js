import React from 'react';
import history from './../history';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="button" onClick={() => history.push('/receptionApp/home')}/>
    </div>
  );
}

export default Welcome;