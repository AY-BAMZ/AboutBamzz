import React, { Component } from 'react'
import './Review.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col } from 'react-bootstrap';
import Back1 from './ReviewSlider/1.jpg'
import Back2 from './ReviewSlider/2.jfif'
import Back3 from './ReviewSlider/3.jpg'
import Back4 from './ReviewSlider/4.jfif'
import Back5 from './ReviewSlider/5.jpg'
import Back6 from './ReviewSlider/6.jfif'
import Back7 from './ReviewSlider/7.jpg'
import Back8 from './ReviewSlider/8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'




class Review extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            arrow: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "slides",
            slidesPerRow: 3,
            draggable: true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            
          };
        return (
            <div className='RevDiv'>
                <h1 className='MyReviews'>Clients Feedback</h1>
                <Slider {...settings}>
                    <Col className='col' md={3}>
                        <img src={Back1}/>
                        <h1>Tawnee Stones</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3} >
                        <img src={Back2}/>
                        <h1>Amarco Josh</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3}>
                        <img src={Back5}/>
                        <h1>Raven Amanda</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3} >
                        <img src={Back6}/>
                        <h1>Jude Linda</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3}>
                        <img src={Back3}/>
                        <h1>Olufad Baba</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3}>
                        <img src={Back4}/>
                        <h1>Oyetola Baba</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3}>
                        <img src={Back7}/>
                        <h1>Seweje Funmi</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3}>
                        <img src={Back8}/>
                        <h1>Tope Tofine</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                    <Col className='col' md={3}>
                        <img src={Back8}/>
                        <h1>Tope Tofine</h1>
                        <div>
                            5 <FontAwesomeIcon className='reviewIcons' icon={faStar} />
                        </div>
                        <p>Bamzz is a fantastic editor he had edited this video professionally for my company starting July 20 within four days! I would recommend this editor over several other editors I’ve used especially if you’re starting a company!</p>
                    </Col>
                </Slider>
            </div>
        )
    }
}

export default Review
