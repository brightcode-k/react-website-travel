import React from "react";
import {Link} from "react-router-dom";
import {Button} from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to receive best excursion offers!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder='Email'
                         className='footer-input'/>
                         <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>YouTube</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL KYIV <i className="fa-solid fa-compass"/>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL KYIV {new Date().getFullYear()}</small>
                    <div className="social-icons">
                        <a className="social-icon-link instagram"
                        href='https://www.instagram.com/only_you_0ne/'
                        traget='_blank'
                        aria-label="Instagram">
                            <i class="fa-brands fa-instagram"/>
                        </a>
                        <a className="social-icon-link youtube"
                        href='https://www.youtube.com/watch?v=Z3Hhtam-dmo&ab_channel=FLYUA' 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label="YouTube">
                            <i class="fa-brands fa-youtube"/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer