import React, {Component} from "react";
import {Link} from "react-router-dom";
import './BookingPage.css';

class BookingPage extends Component {
    render() {

        return (
            <div className={'background__color'}>
                <div className={'BookingPage'}>
                    <div className={'Booking__header'}>
                        <ul>
                            <li>
                                <Link to="/profile">
                                    <img src={'./images/user.png'} width={'50px'}/>
                                </Link></li>

                            <li>Book A Space</li>
                            <li> Booking History</li>
                            <li>Log Out</li>
                        </ul>

                        <div className={'Booking-field'}>

                            <div className={'Booking-vehicles'}>
                                <ul>
                                    <li><Link to="#">
                                        <img src={'./images/car.png'} width={'70px'}/>
                                    </Link></li>
                                    <li><Link to="#">
                                        <img src={'./images/bicycle.png'} width={'70px'}/>
                                    </Link></li>
                                    <li><Link to="#">
                                        <img src={'./images/truck.png'} width={'70px'}/>
                                    </Link></li>
                                </ul>
                            </div>
                            <div className={'booking-time'}>


                            </div>
                            <div className={'parking-space'}>
                          <div className={'parking-spaceA'}>
                              <ul>
                                  <hr/>
                                  <li>1A</li>
                                  <hr/>
                                  <li>2A</li>
                                  <hr/>
                                  <li>3A</li>
                                  <hr/>
                                  <li>4A</li>
                                  <hr/>
                                  <li>5A</li>
                                  <hr/>
                              </ul>
                          </div>
                                <div className={'parking-spaceB'}>
                                    <ul>
                                        <hr/>
                                        <li>1B</li>
                                        <hr/>
                                        <li>2B</li>
                                        <hr/>
                                        <li>3B</li>
                                        <hr/>
                                        <li>4B</li>
                                        <hr/>
                                        <li>5B</li>
                                        <hr/>
                                    </ul>
                                </div>
                                <div className={'parking-spaceC'}>
                                    <ul>
                                        <hr/>
                                        <li>1C</li>
                                        <hr/>
                                        <li>2C</li>
                                        <hr/>
                                        <li>3C</li>
                                        <hr/>
                                        <li>4C</li>
                                        <hr/>
                                        <li>5C</li>
                                        <hr/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BookingPage