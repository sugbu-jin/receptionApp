import React, { Component } from 'react';
import history from './../history';
import './Rating.css';

import activeImage0 from './../img/btn-ico-rating-1-active.png';
import activeImage1 from './../img/btn-ico-rating-2-active.png';
import activeImage2 from './../img/btn-ico-rating-3-active.png';
import activeImage3 from './../img/btn-ico-rating-4-active.png';
import activeImage4 from './../img/btn-ico-rating-5-active.png';

import selectedImage0 from './../img/btn-ico-rating-1-selected.png';
import selectedImage1 from './../img/btn-ico-rating-2-selected.png';
import selectedImage2 from './../img/btn-ico-rating-3-selected.png';
import selectedImage3 from './../img/btn-ico-rating-4-selected.png';
import selectedImage4 from './../img/btn-ico-rating-5-selected.png';

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrSelect: []
        }
    }

    handleChangeIPAddress(e) {
        this.setState({ipAddr: e.target.value});
    }

    handleClick0(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[0] = true;
        this.setState({arrSelect: arr});
    }

    handleClick1(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[1] = true;
        this.setState({arrSelect: arr});
    }

    handleClick2(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[2] = true;
        this.setState({arrSelect: arr});
    }

    handleClick3(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[3] = true;
        this.setState({arrSelect: arr});
    }

    handleClick4(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[4] = true;
        this.setState({arrSelect: arr});
    }

    handleClickSubmit(e) {
        history.push('/receptionApp/home')
    }

    render() {
        return (
            <div className="rating">
                <div className="ratepos">
                    <img src={this.state.arrSelect[0]?selectedImage0:activeImage0} alt="" onClick={this.handleClick0.bind(this)} />
                    <img src={this.state.arrSelect[1]?selectedImage1:activeImage1} alt="" onClick={this.handleClick1.bind(this)} />
                    <img src={this.state.arrSelect[2]?selectedImage2:activeImage2} alt="" onClick={this.handleClick2.bind(this)} />
                    <img src={this.state.arrSelect[3]?selectedImage3:activeImage3} alt="" onClick={this.handleClick3.bind(this)} />
                    <img src={this.state.arrSelect[4]?selectedImage4:activeImage4} alt="" onClick={this.handleClick4.bind(this)} />
                </div>
                <div className="submitbutton" onClick={this.handleClickSubmit.bind(this)} />
            </div>
          );
    }
}

export default Rating;