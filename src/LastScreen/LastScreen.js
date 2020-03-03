import React from 'react';
import history from '../history';
import './LastScreen.css';

const LastScreen = () => {
  return (
    <div className="lastscreen">
      <div className="backtohomebutton" onClick={() => history.push('/receptionApp/home')}/>
    </div>
  );
}

export default LastScreen;