import React from 'react';
import Slider from 'react-slick';

interface CarouselInterface {
  content: Array<any>;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  dots?: boolean;
}
const Carousel = ({
  content,
  slidesToShow = 6,
  slidesToScroll = 1,
  autoplay = true,
  dots = false,
}: CarouselInterface) => {
  var settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    initialSlide: 0,
    arrows: false,
    autoplay,
    appendDots: (dots: any) => (
      <div
        style={{
          top: '10px',
          position: 'relative',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className='h-3 w-3 rounded-full bg-gray-g4'></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>{content}</Slider>
    </div>
  );
};

export default Carousel;
