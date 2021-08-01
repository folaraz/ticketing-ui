import React, {Component} from 'react';
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

class HomePage extends Component {

    state = {
        loadLoginPage: false,
        loadSignUpPage: false
    }

    handleLogin = () => {
        this.setState({loadLoginPage: true})

    }

    handleSignUp = () => {
        this.setState({loadSignUpPage: true})
    }

    render() {
        const {loadLoginPage, loadSignUpPage} = this.state;
        let pageToRender = <div>Testing Something</div>;
        if (loadLoginPage) {
            pageToRender = <Login/>
        }
        if (loadSignUpPage) {
            pageToRender = <SignUp/>
        }
        return (<div>
            {loadLoginPage || loadSignUpPage === true ? pageToRender :
                <div>
                    <button className="btn success" onClick={this.handleSignUp}>Sign Up</button>
                    <button className="btn success" onClick={this.handleLogin}>Login</button>
                </div>
            }
        </div>)
    }

}

export default HomePage