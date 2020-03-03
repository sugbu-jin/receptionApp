import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import Setting from "./Setting/Setting";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ConferenceRoom from "./ConferenceRoom/ConferenceRoom";
import DrinkSelection from "./DrinkSelection/DrinkSelection";
import Rating from "./Rating/Rating";
import LastScreen from "./LastScreen/LastScreen";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/receptionApp/" exact component={Welcome} />
                    <Route path="/receptionApp/home" component={Home} />
                    <Route path="/receptionApp/setting" component={Setting} />
                    <Route path="/receptionApp/personalinfo" component={PersonalInfo} />
                    <Route path="/receptionApp/conferenceroom" component={ConferenceRoom} />
                    <Route path="/receptionApp/drinkselection" component={DrinkSelection} />
                    <Route path="/receptionApp/rating" component={Rating} />
                    <Route path="/receptionApp/lastscreen" component={LastScreen} />
                </Switch>
            </Router>
        )
    }
}
