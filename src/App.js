import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from "./components/homepage/login/Login";
import SignUp from "./components/homepage/signup/SignUp";
import './App.css'
import HomePage from "./components/homepage/HomePage";


class App extends Component{

    render() {
        return(
            <div className={'App'}>
             <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                </Switch>
                </Router> 
            </div>
        )

    }
}

export default App;
