import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import restorantImg from '../assets/restorant.webp'
import tableImg from '../assets/table.jpg'
import view1Img from '../assets/view1.jpg'
import './CarouselBox.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={restorantImg}
                        alt="restorant"
                    />
                    <Carousel.Caption>
                        <h1>BE YUM!!!!</h1>
                        <p>
                            You can book a table by phone number 050 333 25 25
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={tableImg} alt="table" />
                    <Carousel.Caption>
                        <h3>BE YUM!!!!</h3>
                        <p>
                            We are waiting for you from Monday to Friday 10:00 -
                            22:00
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={view1Img} alt="view" />
                    <Carousel.Caption>
                        <h3>BE YUM!!!!</h3>
                        <p>We are located at Cathedral Street!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
