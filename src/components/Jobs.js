import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Jobs.css'
import Design1 from './svg/design1.svg'
import Design2 from './svg/design2.svg'
import Design3 from './svg/design3.svg'
import Design4 from './svg/design4.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

function Jobs() {
    return (
        <div className='Jobs'>
            <div className='JobsServices'>
                <h1>Services</h1>
            </div>
            <Row className="JobRow">
                <Col md={2} className='JobCol'>
                    <img src={Design1}/>
                    <h1>Graphic Design</h1>
                    <div className='JobAbout'>
                        <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
                <Col md={2} className='JobCol'>
                    <img src={Design2}/>
                    <h1>Branding Services</h1>
                    <div className='JobAbout'>
                    <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
                <Col md={2} className='JobCol'>
                    <img src={Design3}/>
                    <h1>UI UX Design</h1>
                    <div className='JobAbout'>
                    <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p >
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
                <Col md={2} className='JobCol'>
                    <img src={Design4}/>
                    <h1>Website Design</h1>
                    <div className='JobAbout'>
                    <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
            
                <Col md={2} className='JobCol'>
                    <img src={Design1}/>
                    <h1>Graphic Design</h1>
                    <div className='JobAbout'>
                        <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
                <Col md={2} className='JobCol'>
                    <img src={Design2}/>
                    <h1>Branding Services</h1>
                    <div className='JobAbout'>
                    <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
                <Col md={2} className='JobCol'>
                    <img src={Design3}/>
                    <h1>UI UX Design</h1>
                    <div className='JobAbout'>
                    <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p >
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
                <Col md={2} className='JobCol'>
                    <img src={Design4}/>
                    <h1>Website Design</h1>
                    <div className='JobAbout'>
                    <FontAwesomeIcon className='headerIcons' icon={faHandPointRight} />
                        <p>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Jobs
