import React, { Component } from 'react';
import history from './../history';
import "./PersonalInfo.css";

import uncheckImage from './../img/btn-ico-tickbox-active.png';
import checkImage from './../img/btn-ico-tickbox-selected.png';

import homeicon from './../img/homeicon.png';
import stayoptionicon from './../img/stayoptionicon.png';
import personalinfoicon from './../img/personalinfoselicon.png';

import personalinfotitle from './../img/personalinfotitle.png';

class PersonalInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameText: '',
            emailText: '',
            cardNum: '',
            accessCode: '',
            isChecked: false,
            session: this.props.location.state,
            codeTitle: 'Productivity Card No.'
        }
    }

    handleChangeName(e) {
        this.setState({nameText: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({emailText: e.target.value});
    }

    handleChangeCardNum(e) {
        this.setState({cardNum: e.target.value});
    }

    handleClickProduct() {
        this.setState({codeTitle: 'Productivity Card No.'});
    }

    handleClickAccess() {
        this.setState({codeTitle: 'Access Code'});
    }

    handleClickNext(e) {
        
        if (this.state.nameText === '' && this.state.emailText === '') { // Existing Client...
            if (this.state.cardNum === '') {
                this.fetchExistingClientProd(this.state.cardNum);
            } else {
                this.fetchExistingClientAccess(this.state.accessCode);
            }
        }

        if (this.state.nameText !== '' && this.state.emailText !== '' && this.state.cardNum !== '') { // New Client...
            if (this.state.isChecked) {
                let val = {
                    session: this.state.session,
                    name: this.state.nameText,
                    email: this.state.emailText,
                    card: this.state.cardNum,
                    access: this.state.access
                };
                history.push('/receptionApp/drinkselection', val);
            } else {
                alert("Please read and accept terms and conditions.");
            }
        }
    }

    fetchExistingClientProd(card) {

        fetch('http://192.168.1.49/workplace/app/check-registration?prod_card_no=' + card, {
            method: 'POST'
		}).then(response => {
            return response.json();
		}).then(json => {
            console.log(json);
        });
    }

    fetchExistingClientAccess(access) {

        fetch('http://192.168.1.49/workplace/app/check-registration?access_card_no=' + access, {
            method: 'POST'
		}).then(response => {
            return response.json();
		}).then(json => {
            console.log(json);
        });
    }

    render() {
        return (
            <div className="personalinfo">
                <div className="iconpos">
                    <div>
                        <div className="homeicon" style={{backgroundImage: `url(${homeicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/')} />
                        <div className="stayoptionicon" style={{backgroundImage: `url(${stayoptionicon})`, display:'inline-block'}} onClick={() => history.push('/receptionApp/home')}/>
                        <div className="personalinfoicon" style={{backgroundImage: `url(${personalinfoicon})`, display:'inline-block'}}/>
                    </div>
                    <div className="personalinfotitle" style={{backgroundImage: `url(${personalinfotitle})`}} />
                </div>
                
                <div className="inputnamepos">
                    <div style={{display:'inline-block'}} >
                        <label style={{fontSize:'20px'}}>Name</label>
                        <div>
                            <input type="text" className="inputtext" placeholder="   Your name"
                            value={this.state.nameText} onChange={this.handleChangeName.bind(this)} />
                        </div>
                    </div>
                    <div style={{display:'inline-block', marginLeft:'20px'}} >
                        <label style={{fontSize:'20px'}}>Email Address</label>
                        <div>
                            <input type="text" className="inputtext" placeholder="   email@email.com"
                            value={this.state.emailText} onChange={this.handleChangeEmail.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="connecttxt">OR CONNECT VIA</div>
                <div className="buttonpos">
                    <button className="buttonprod" onClick={this.handleClickProduct.bind(this)}>Productivity Card No.</button>
                    <button className="buttonaccess" onClick={this.handleClickAccess.bind(this)}>Access Code</button>
                </div>
                <div className="prodcardpos">
                    <div style={{display:'inline-block'}}>
                        <label style={{fontSize:'20px'}}>{this.state.codeTitle}</label>
                        <div>
                            <input type="text" className="inputtext" placeholder="   000-000"
                            value={this.state.cardNum} onChange={this.handleChangeCardNum.bind(this)} />
                        </div>
                    </div>
                    <img src={require('./../img/enjoy-benefit.png')} alt="" style={{marginLeft:'10px'}} />
                </div>
                <div className="checkbox">
                    <div style={{display: 'inline-block', backgroundImage: `url(${this.state.isChecked?checkImage:uncheckImage})`, width:'30px', height:'30px'}}
                            onClick={() => {this.setState({isChecked: !this.state.isChecked})}} />
                    <div style={{display: 'inline-block', marginLeft:'10px', verticalAlign:'super', color:'#7D8588'}}>I have read and accept the <b><u>terms and conditions.</u></b></div>
                </div>
                <div className="nextbackbtnpos">
                    <div className="backbutton" onClick={() => history.push('/receptionApp/home')}/>
                    <div className="nextbutton" onClick={this.handleClickNext.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;