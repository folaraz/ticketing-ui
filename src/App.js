import React, {Component} from 'react';
import Profile from "./components/landingpage/profile/Profile";
import Login from "./components/homepage/login/Login";
import SignUp from "./components/homepage/signup/SignUp";
import './App.css';
import HomePage from "./components/homepage/HomePage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

    render() {
        return(<Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/sign-up">
                        <SignUp/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                </Switch>
            </div>
        </Router>)


    }
}

export default App;
