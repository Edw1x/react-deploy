import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            classNmae="carousel"
            src="https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="mountaints"
          />
          <CarouselCaption>
            <h3>Це лава і тут нічого цікавого</h3>
            <p>мені 13 минало я пас овечок за селом</p>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            classNmae="carousel"
            src="https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="mountaints"
          />
          <CarouselCaption>
            <h3>Це тоже лава і тут нічого цікавого</h3>
            <p>мені 14 минало я пас овечок за селом</p>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            classNmae="carousel"
            src="https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="mountaints"
          />
          <CarouselCaption>
            <h3>І як ви догадались тут тоже лава і тут нічого цікавого</h3>
            <p>мені 15 минало я пас овечок за селом</p>
          </CarouselCaption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
