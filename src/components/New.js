import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Image from './13.png' 
import './new.css'

function New() {
    return (
        <div className='Welcome-section'>
            <div className='mobileSearch'>
                <input className='mobileInput' placeholder='Search' type='text'/>
                <button className='mobileSearchButton' type='submit'>Search</button>
            </div> 
            <Row className='WelcomeGreetings'>
                <Col className='WelcomeDiv' md={6}>
                    <h1>Welcome to <span>Bamzz</span></h1>
                    <p>After an intense 12-day knockout tournament in Lisbon, it's Champions League final day!!!

                        It's a clash between 'Final debutants vs five-time winners' and also a game that will be played behind closed doors.

                        Between Paris Saint-Germain (PSG) and Bayern Munich, one will be crowned as the champion of Europe.

                        While such an occasion deserves to be played in front of a full stadium, the 65,000-seat Estadio da Luz will be empty.</p>
                    <button type='submit' className='WelcomeReadMore'>Learn more</button>
                </Col>
                <Col className='WelcomeImage' md={6}>
                    <div>
                    <p>.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default New
