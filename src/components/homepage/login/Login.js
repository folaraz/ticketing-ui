import React, {Component} from 'react';
import './Login.css';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className={'square'}>

                <div className={'Login'}>
                    <div className='login-container'>
                        <header>
                            <div className={'header-headings'}>
                                <span>Login </span>
                            </div>
                        </header>
                        <form className='LoginForm' onSubmit={this.onSubmit}>
                            <div
                                className={'account-form-fields login'}>
                                <input id='email' name='email' type='email' value={email} placeholder='E-mail'
                                       onChange={this.handleEmailChange}/>
                                <input id='access' name='password' type='password' value={password}
                                       placeholder='Password'
                                       onChange={this.handlePasswordChange}/>
                            </div>
                            <button className='btn-submit-form-two' type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Login;