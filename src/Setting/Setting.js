import React, { Component } from 'react';
import history from './../history';
import './Setting.css';

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ipAddr: ''
        };
    }

    handleChangeIPAddress(e) {
        this.setState({ipAddr: e.target.value});
    }
    
    render() {
        return (
            <div className="setting">
                <div className="settingpos">
                    <div style={{display:'inline-block', marginRight: '10px'}}>IP Address/Domain Name:</div>
                    <input type="text" className="inputtext" placeholder="   http://192.168.1.49/"
                        value={this.state.ipAddr} onChange={this.handleChangeIPAddress.bind(this)} />
                </div>
                <div className="savebutton" onClick={() => history.push('/receptionApp/home', this.state.ipAddr)}/>
            </div>
          );
    }
}

export default Setting;