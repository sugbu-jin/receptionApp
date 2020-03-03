import React, { Component } from "react";
import history from './../history';
import './DrinkSelection.css';

import brewedImg from './../img/ico-brewed-normal.png';
import icedImg from './../img/ico-iced-normal.png';
import otherImg from './../img/ico-other-normal.png';

import brewedSelImg from './../img/ico-brewed-selected.png';
import icedSelImg from './../img/ico-iced-selected.png';
import otherSelImg from './../img/ico-other-selected.png';

import homeicon from './../img/homeicon.png';
import stayoptionicon from './../img/stayoptionicon.png';
import personalinfoicon from './../img/personalinfoicon.png';
import drinkselectionicon from './../img/drinkselectionselicon.png';

import drinkselectiontitle from './../img/drinkselectiontitle.png';

export default class DrinkSelection extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        isBrewed: false,
        isIced: false,
        isOther: false
      };
    }

    onClickDrink(e) {

    }

    render() {
        return (
            <div className="drinkselection">
              <div className="iconpos">
                <div>
                  <div className="homeicon" style={{backgroundImage: `url(${homeicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/')} />
                  <div className="stayoptionicon" style={{backgroundImage: `url(${stayoptionicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/home')}/>
                  <div className="personalinfoicon" style={{backgroundImage: `url(${personalinfoicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/personalinfo')}/>
                  <div className="drinkselectionicon" style={{backgroundImage: `url(${drinkselectionicon})`, display:'inline-block'}}/>
                </div>
                <div className="drinkselectiontitle" style={{backgroundImage: `url(${drinkselectiontitle})`}} />
              </div>
              <div className="selectionpos">
                  <div style={{display:'inline-block'}}>
                    <img src={require('./../img/Ico-img-drinks-coffee.png')} alt="" style={{marginLeft:'80px'}} />
                    <div className="drinkbutton" style={{backgroundImage: `url(${this.state.isBrewed?brewedSelImg:brewedImg})`}} 
                      onMouseEnter={() => {this.setState({isBrewed: true})}}
                      onMouseLeave={() => {this.setState({isBrewed: false})}}
                      onClick={this.onClickDrink.bind}/>
                      <label style={{color: '#897372', marginLeft: '100px'}}><b><u>FREE</u></b></label>
                  </div>
                  <div style={{display:'inline-block'}}>
                    <img src={require('./../img/Ico-img-drinks-icedtea.png')} alt="" style={{marginLeft:'80px'}} />
                    <div className="drinkbutton" style={{backgroundImage: `url(${this.state.isIced?icedSelImg:icedImg})`}} 
                      onMouseEnter={() => {this.setState({isIced: true})}}
                      onMouseLeave={() => {this.setState({isIced: false})}}
                      onClick={this.onClickDrink.bind(this)}/>
                      <label style={{color: '#897372', marginLeft: '100px'}}><b><u>FREE</u></b></label>
                  </div>
                  <div style={{display:'inline-block'}}>
                    <img src={require('./../img/Ico-img-drinks-others.png')} alt="" style={{marginLeft:'80px'}} />
                    <div className="drinkbutton" style={{backgroundImage: `url(${this.state.isOther?otherSelImg:otherImg})`}} 
                      onMouseEnter={() => {this.setState({isOther: true})}}
                      onMouseLeave={() => {this.setState({isOther: false})}}
                      onClick={this.onClickDrink.bind}/>
                      <label style={{color: '#897372'}}><b>Take a look at our menu and inform the</b></label>
                  </div>
              </div>
              <label style={{color: '#897372', position: 'absolute', top: '76%', left: '53%'}}> <b>barista which drink would you like to order.</b></label>
              <div className="nextbackbtnpos">
                    <div className="backbutton" onClick={() => history.push('/receptionApp/personalinfo')}/>
                    <div className="nextbutton" onClick={() => history.push('/receptionApp/lastscreen')}/>
                </div>
            </div>
        );
    }
}