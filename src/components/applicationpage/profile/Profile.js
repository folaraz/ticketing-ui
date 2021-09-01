import React, {Component} from 'react';
import './Profile.css'

class Profile extends Component {

    state = {
        title: '',
        userName: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        address: ''
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
    handleGenderChange = (e) => {
        this.setState({gender: e.target.value})
    }
    handleDOBChange = (e) => {
        this.setState({dateOfBirth: e.target.value})
    }
    handleAddressChange = (e) => {
        this.setState({address: e.target.value})
    }

    render() {
        const {userName, firstName, lastName, gender, dateOfBirth, address} = this.state;
        return (
            <div className={'background__color'}>


                <div className={'Profile'}>

                    <div className={'Profile__header'}>
                        <h4>PROFILE</h4>
                    </div>

                    <div className={'Profile__content'}>
                        <div className={'contents'}>
                            <h3>Account</h3>
                            <hr/>
                            <form className='ProfileForm' onSubmit={this.onSubmit}>
                                <div className={'Profile-fields'}>

                                    <tr>
                                        <td><h5>Profile Picture</h5></td>
                                        <td><a href={'#'}><img src={'./images/user.png'} width={'50px'}/></a></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Full Name</h5></td>
                                        <td><input id='firstname' name='firstname' type='firstname' value={firstName}
                                                   placeholder='First Name'
                                                   onChange={this.handleFirstNameChange}
                                        /></td>
                                        <td><input id='surname' name='lastname' type='lastname' value={lastName}
                                                   placeholder='Last Name'
                                                   onChange={this.handleLastNameChange}/></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Username</h5></td>
                                        <td><input id='username' name='username' type='username' value={userName}
                                                   placeholder='Username'
                                                   onChange={this.handleUsernameChange}/></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Gender</h5></td>
                                        <td><select id="sex" value={gender}
                                                    onChange={this.handleGenderChange}>
                                            <option value="" disabled selected>Select your Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Date Of Birth</h5></td>
                                        <td><input className="date" id='DOB' name='DOB' type='date' value={dateOfBirth}
                                                   placeholder='date of birth'
                                                   onChange={this.handleDOBChange}/></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Address</h5></td>
                                        <td><input className="address" id='address' name='address' type='address'
                                                   value={address}
                                                   placeholder='Address'
                                                   onChange={this.handleAddressChange}/></td>
                                    </tr>

                                </div>
                                <button className='btn-save-changes' type='submit'>Save Changes</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Profile