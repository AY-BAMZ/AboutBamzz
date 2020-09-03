import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Quality from './quality.svg'
import Qualityone from './quality1.svg'
import Qualitytwo from './quality2.svg'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ReviewComponent() {
    return (
        <div className='reviews'>
            <Row className='reviewRow'>
                <Col md={4} className='reviewCol'>
                    <div className='bestQuality'>
                        <img src={Quality} className='qualitySvg' />
                        <h2>Quality Services</h2>
                        <p>
                        <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>
                            We will use our over 5 years of experience to make your brand stands out among others. we provide top-notch services with 100% satisfaction guarantee.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='reviewCol'>
                    <div className='bestQuality'>
                        <img src={Qualityone} className='qualitySvg' />
                        <h2>Good Communication</h2>
                        <p>
                        <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>
                            We will use our over 5 years of experience to make your brand stands out among others. we provide top-notch services with 100% satisfaction guarantee.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='reviewCol'>
                    <div className='bestQuality'>
                        <img src={Qualitytwo} className='qualitySvg' />
                        <h2>Customer Support</h2>
                        <p>
                        <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>
                            We will use our over 5 years of experience to make your brand stands out among others. we provide top-notch services with 100% satisfaction guarantee.
                        </p>
                    </div>
                </Col>
            
                <Col md={4} className='reviewCol'>
                    <div className='bestQuality'>
                        <img src={Quality} className='qualitySvg' />
                        <h2>Quality Services</h2>
                        <p>
                        <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>
                            We will use our over 5 years of experience to make your brand stands out among others. we provide top-notch services with 100% satisfaction guarantee.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='reviewCol'>
                    <div className='bestQuality'>
                        <img src={Qualityone} className='qualitySvg' />
                        <h2>Good Communication</h2>
                        <p>
                        <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>
                            We will use our over 5 years of experience to make your brand stands out among others. we provide top-notch services with 100% satisfaction guarantee.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='reviewCol'>
                    <div className='bestQuality'>
                        <img src={Qualitytwo} className='qualitySvg' />
                        <h2>Customer Support</h2>
                        <p>
                        <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>
                            We will use our over 5 years of experience to make your brand stands out among others. we provide top-notch services with 100% satisfaction guarantee.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ReviewComponent
