import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import Whatsapp from './whatsapp.svg'
import './Footer.css'

function Footer() {
    return (
        <div className='FooterSection'>
            <Row className='footerRow'>
                <Col md={2} className='footerCol'>
                    <h1>Categories</h1>
                    <ul>
                        <li>Graphic Design</li>
                        <li>Logo Design</li>
                        <li>Branding Services</li>
                        <li>Packaging Design</li>
                        <li>Product Design</li>
                        <li>UI UX Design</li>
                        <li>Website Design</li>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Web Application</li>
                    </ul>
                </Col>
                <Col md={2} className='footerCol'>
                    <h1>About</h1>
                    <ul>
                        <li>About C.E.O</li>
                        <li>Mission and Vision</li>
                        <li>Careers</li>
                        <li>Partnerships</li>
                        <li>Privacy Policy</li>
                        <li>What We Do</li>
                        <li>Why Choose Us</li>
                        <li>Terms of Service</li>
                    </ul>
                </Col>
                <Col md={2} className='footerCol'>
                    <h1>Support</h1>
                    <ul>
                        <li>Help & Support</li>
                        <li>Hiring Bamzz</li>
                        <li>Trust & Safety</li>
                        <li>Quality Services</li>
                        <li>Issue With Order</li>
                        <li>Guarantee</li>
                    </ul>
                </Col>
                <Col md={2} className='footerCol'>
                    <h1>Contact Us</h1>
                    <label>Your Email Address</label>
                    <input placeholder='Email...'/>
                    <label>Type Your Message Here</label>
                    <textarea placeholder='Your message here' />
                    <button type='submit'>Send</button>

                    <h2>Social Media Contact</h2>
                    <div className='footerSocialMedia'>
                    <img src={Facebook} href='#' />
                    <img src={Instagram} href='#' />
                    <img src={Twitter} href='#' />
                    <img src={Whatsapp} href='#' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
