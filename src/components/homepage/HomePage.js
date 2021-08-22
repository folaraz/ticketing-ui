import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './HomePage.css'

class HomePage extends Component {

    render() {
        return (
            <div className={'Homepage'}>
                <div className={'circle'}>

                </div>

                <div className={'Homepage__header'}>

                    <div className={'Header__nav'}>
                        <ul>
                            <li><a href={'#'}>About</a></li>
                            <li><a href={'#'}>Pricing</a></li>
                            <li><a href={'#'}>Contact</a></li>

                        </ul>
               <Link to="/login">
                <button   className='btn-submit-form' onClick="/login">Log In</button>
                </Link>
                <Link to="/sign-up">
                    <button className='btn-submit-form' onClick="/signup">Sign Up</button>
                </Link>
                    </div>
                </div>

<div className={'content'}>
    <div className={'textBox'}>
        <h2> Get Your Car Parked Safely with <span> Given name</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <a href={'#'}>Learn More</a>
    </div>


</div>
                <p>You can visit us on</p>
                <ul className={'sci'}>
                    <li><a href={'#'}><img src={'./images/facebook.png'}/></a></li>
                    <li><a href={'#'}><img src={'./images/twitter.png'}/></a></li>
                    <li><a href={'#'}><img src={'./images/instagram.png'}/></a></li>
                </ul>
            </div>
        )
    }

}

export default HomePage