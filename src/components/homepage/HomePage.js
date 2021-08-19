import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './HomePage.css'

class HomePage extends Component {

    render() {
        return (
            <div className={'Homepage'}>

                <div className={'Homepage__header'}>
                    <span className={'title'}>Ultimate</span>
                    <div className="dropdown">
                        <Link className="dropbtn">features
                        </Link>
                        <div className="dropdown-content">
                            <p>We have amazing parking spaces that can take over a hundred vehicles,also different parking spaces for car,bicycle and lorry.</p>
                        </div>
                    </div>
                    <div className={'Header__nav'}>

               <tr> <td><Link to="/login">
                <button   id='btn-submit-form-one' onClick="/login">Log In</button>
                </Link>
               </td>
              <td> <Link to="/sign-up">
                    <button id={'btn-submit-form-two'} onClick="/signup">Sign Up</button>
                </Link>
              </td>
               </tr>
                    </div>
                </div>
                <div className={'Homepage__container'}>
                    <img className="home__image" src="./images/body.jpg" alt=""/>
                    <div className={'container__one'}>
                        <h1>Get Your Vehicle <br/>Parked</h1>
                        <p>With condusive parking spaces,an app,tools&guides <br/> Ultimate is the best way to safeguard your vehicle</p>
 <br/>
                        <button  className={'btn-submit-form-three'} onClick='#'> Get it on <br/> <img  src={"./images/playstore.png"} width={'22px'}/>  <strong>Play Store</strong> </button>
                        <button  className={'btn-submit-form-three'} onClick='#'>   Get it on <br/>  <img  src={"./images/apple.png"} width={'25px'}/> <strong>App Store</strong> </button>
                    </div>

                </div>
            </div>
        )
    }

}

export default HomePage