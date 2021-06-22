import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import logo from '../../../images/logo1.png';

const Footer = () => {
    return (
        <footer className='pb-3 pt-5 px-5 footer-bg'>
            <div className="footer-container row m-auto ">
                <div className="col-md-4">
                    <h3><img src={logo} style={{ height: "75px" }} alt="" /></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipis elit. Et id nam,
                    quaerat quidem iusto obcaecati. Nobis cum aliquid dignissimos impedit?</p>
                    <div className="input-group mb-3 w-75 input-box">
                        <input type="text" className="form-control" placeholder="Your Email" />
                        <button className="btn submit-btn" type="submit">Submit</button>
                    </div>
                </div>

                <div className="col-md-4 links mt-3">
                    <h3>Information</h3>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Our Team</a></p>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms & Condition</a></p>
                </div>

                <div className="col-md-4 mt-3 ">
                    <div>
                        <h3>Contact Info</h3>
                        <p><FontAwesomeIcon icon={faPhone} /> +1-202-555-0139</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> flooringlodge@example.com</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 12 Greenlawn Dr Pawling, New York</p>
                    </div>

                    <div className='footer-social-icon'>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href=""><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    </div>
                </div>
                <small className='text-center pt-3'>Copyright © 2021 Flooring Lodge. - All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;