import React from 'react';
import cleaners from './images/cleanersjpg.jpg';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <img className="img-fluid" src={cleaners} alt="" />
                    </div>
                    <div className="col-md-2">
                        <h6 className="text-primary">Company</h6>
                        <ul>
                            <li>About</li>
                            <li>Project</li>
                            <li>Our Team</li>
                            <li>Terms and Condition</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h6 className="text-primary">Quick Links</h6>
                        <ul>
                            <li>Home</li>
                            <li>Feature</li>
                            <li>Services</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-primary">About Us</h6>
                        <p className="text-secondary-alt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident facilis cum harum, alias impedit repudiandae.</p>
                        <div className="icon-nav">
                            <ul>
                                <li><FontAwesomeIcon className="icon" icon={faFacebook} /> </li>
                                <li><FontAwesomeIcon className="icon" icon={faInstagram} /> </li>
                                <li><FontAwesomeIcon className="icon" icon={faTwitter} /> </li>
                                <li><FontAwesomeIcon className="icon" icon={faSkype} /> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center m-0 pb-3">
                <small className="text-secondary-alt">&copy; All Rights Reserved {new Date().getFullYear()}</small>
            </p>
        </section>
    );
};

export default Footer;