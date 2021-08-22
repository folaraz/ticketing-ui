import React, {Component} from 'react';

import './SignUp.css';

class SignUp extends Component {

    state = {
        title: '',
        userName: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        password: ''
    }


    onSubmit = (e) => {
        e.preventDefault();
    }
    handleUsernameChange = (e) => {
        this.setState({userName: e.target.value})
    }
    handleFirstNameChange = (e) => {
        this.setState({firstName: e.target.value})
    }
    handleLastNameChange = (e) => {
        this.setState({lastName: e.target.value})
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handleGenderChange = (e) => {
        this.setState({gender: e.target.value})
    }
    handleDOBChange = (e) => {
        this.setState({dateOfBirth: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        const {userName, firstName, lastName, email, gender, dateOfBirth, password} = this.state;
        return (
            <div className={'square'}>


            <div className={'Details'}>
                <div className='Details-container'>
                    <header>
                        <div className={'header-headings'}>
                            <span> SignUp</span></div>
                    </header>
                    <form className='DetailsForm' onSubmit={this.onSubmit}>
                        <div
                            className='Details-field'>
                            <tr>
                                <td>
                                    <input id='username' name='username' type='username' value={userName}
                                           placeholder='Username'
                                           onChange={this.handleUsernameChange}/></td>
                                <td><input id='firstname' name='firstname' type='firstname' value={firstName}
                                           placeholder='First Name'
                                           onChange={this.handleFirstNameChange}
                                /></td>
                            </tr>
                            <tr>
                                <td><input id='lastname' name='lastname' type='lastname' value={lastName}
                                           placeholder='Last Name'
                                           onChange={this.handleLastNameChange}/></td>
                                <td><input id='email' name='email' type='email' value={email} placeholder='E-mail'
                                           onChange={this.handleEmailChange}/></td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="date" id='DOB' name='DOB' type='date' value={dateOfBirth}
                                           placeholder='date of birth'
                                           onChange={this.handleDOBChange}/></td>
                                <td>
                                    <select id="gender" value={gender}
                                            onChange={this.handleGenderChange}>
                                        <option value="" disabled selected>Select your Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>

                                </td>

                            </tr>
                            <input id='password' name='password' type='password' value={password}
                                       placeholder='Password'
                                       onChange={this.handlePasswordChange}/>
                        </div>
                        <button className='btn-submit-form-one' type='submit'>SignUp</button>
                    </form>
                </div>

            </div>
            </div>
        )

    }
}

export default SignUp;
