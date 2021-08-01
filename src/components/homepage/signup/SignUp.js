import React, {Component} from 'react';

import './SignUp.css';

class SignUp extends Component {

    state = {
        title: '',
        Username: '',
        firstname: '',
        lastname: '',
        DOB: '',
        gender: '',
        password: ''
    }
    onSubmit = (e) => {
        console.log(this.state.username);
        console.log(this.state.firstname);
        console.log(this.state.lastname);
        console.log(this.state.email);
        console.log(this.state.gender);
        console.log(this.state.DOB);
        console.log(this.state.password);
        e.preventDefault();
    }
    handleUsernameChange = (e) => {
        this.setState({username: e.target.value})
    }
    handleFirstnameChange = (e) => {
        this.setState({firstname: e.target.value})
    }
    handleLastnameChange = (e) => {
        this.setState({lastname: e.target.value})
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handleGenderChange = (e) => {
        this.setState({gender: e.target.value})
    }
    handleDOBChange = (e) => {
        this.setState({DOB: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        const {username, firstname, lastname, email, gender, DOB, password} = this.state;
        return (
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
                                    <input id='username' name='username' type='username' value={username}
                                           placeholder='Username'
                                           onChange={this.handleUsernameChange}/></td>
                                <td><input id='firstname' name='firstname' type='firstname' value={firstname}
                                           placeholder='Firstname'
                                           onChange={this.handleFirstnameChange}
                                /></td>
                            </tr>
                            <tr>
                                <td><input id='lastname' name='lastname' type='lastname' value={lastname}
                                           placeholder='Lastname'
                                           onChange={this.handleLastnameChange}/></td>
                                <td><input id='email' name='email' type='email' value={email} placeholder='E-mail'
                                           onChange={this.handleEmailChange}/></td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="date" id='DOB' name='DOB' type='date' value={DOB}
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

                                    {/*<input id='occupation' name='gender' type='gender' value={gender}*/}
                                    {/*       placeholder='Gender'*/}
                                    {/*       onChange={this.handleGenderChange}/>*/}


                                </td>

                            </tr>
                            <td><input id='password' name='password' type='password' value={password}
                                       placeholder='Password'
                                       onChange={this.handlePasswordChange}/></td>
                        </div>
                        <button className='btn-submit-form' type='submit'>SignUp</button>
                    </form>
                </div>

            </div>
        )

    }
}

export default SignUp;
