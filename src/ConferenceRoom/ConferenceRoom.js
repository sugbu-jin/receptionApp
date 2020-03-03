import React, { Component } from 'react';
import history from './../history';
import './ConferenceRoom.css';

import homeicon from './../img/homeicon.png';
import stayoptionicon from './../img/stayoptionicon.png';
import conferenceicon from './../img/conferenceselicon.png';

import conferencetitle from './../img/conferencetitle.png';

class ConferenceRoom extends Component {
    render() {
        return (
            <div className="conference">
                <div className="iconpos">
                    <div>
                        <div className="homeicon" style={{backgroundImage: `url(${homeicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/')} />
                        <div className="stayoptionicon" style={{backgroundImage: `url(${stayoptionicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/home')} />
                        <div className="conferenceicon" style={{backgroundImage: `url(${conferenceicon})`, display:'inline-block'}}/>
                    </div>
                    <div className="conferencetitle" style={{backgroundImage: `url(${conferencetitle})`}} />
                </div>
                <div className="confbackbutton" onClick={() => history.push('/receptionApp/home')}/>
            </div>
        );
    }
}

export default ConferenceRoom;