import React, { Component } from "react";
import history from './../history';
import "./Home.css";

import hourlyImage from './../img/btn-ico-hourly-normal.png';
import dailyImage from './../img/btn-ico-daily-normal.png';
import monthlyImage from './../img/btn-ico-monthly-normal.png';
import conferenceImage from './../img/btn-ico-conf-normal.png';

import hourlySelImage from './../img/btn-ico-hourly-selected.png';
import dailySelImage from './../img/btn-ico-daily-selected.png';
import monthlySelImage from './../img/btn-ico-monthly-selected.png';
import conferenceSelImage from './../img/btn-ico-conf-selected.png';

import homeicon from './../img/homeicon.png';
import stayoptionicon from './../img/stayoptionselicon.png';

import stayoptiontitle from './../img/stayoptiontitle.png';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isHourly: false,
      isDaily: false,
      isMonthly: false,
      isConference: false
    };
  }

  render() {
    
    let ipAddr = this.props.location.state;
    if (ipAddr === undefined) {
      ipAddr = '';
    }
    
    return (
      <div className="home">
        <div className="iconpos">
          <div>
            <div className="homeicon" style={{backgroundImage: `url(${homeicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/')} />
            <div className="stayoptionicon" style={{backgroundImage: `url(${stayoptionicon})`, display:'inline-block'}} />
          </div>
          <div className="hometitle" style={{backgroundImage: `url(${stayoptiontitle})`}} />
        </div>
        <div className="homebuttonpos">
          <div className="hourlybutton" style={{backgroundImage: `url(${this.state.isHourly?hourlySelImage:hourlyImage})`}} 
                onMouseEnter={() => {this.setState({isHourly: true})}}
                onMouseLeave={() => {this.setState({isHourly: false})}}
                onClick={() => history.push('/receptionApp/personalinfo', {ipAddr: ipAddr, session: "hourly"})}/>

          <div className="dailybutton" style={{backgroundImage: `url(${this.state.isDaily?dailySelImage:dailyImage})`}} 
                onMouseEnter={() => {this.setState({isDaily: true})}}
                onMouseLeave={() => {this.setState({isDaily: false})}}
                onClick={() => history.push('/receptionApp/personalinfo', {ipAddr: ipAddr, session: "daily"})}/>

          <div className="monthlybutton" style={{backgroundImage: `url(${this.state.isMonthly?monthlySelImage:monthlyImage})`}} 
                onMouseEnter={() => {this.setState({isMonthly: true})}}
                onMouseLeave={() => {this.setState({isMonthly: false})}}
                onClick={() => history.push('/receptionApp/personalinfo', {ipAddr: ipAddr, session: "monthly"})}/>

          <div className="conferencebutton" style={{backgroundImage: `url(${this.state.isConference?conferenceSelImage:conferenceImage})`}} 
                onMouseEnter={() => {this.setState({isConference: true})}}
                onMouseLeave={() => {this.setState({isConference: false})}}
                onClick={() => history.push('/receptionApp/conferenceroom')}/> 
        </div>
        <div className="settingbutton" onClick={() => history.push('/receptionApp/setting')} />
      </div>
    );
  }
}
