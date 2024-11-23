import { testimonials } from '@/constants/constant';
import React from 'react';
import Carousel from '../carousel';
import StarRatings from 'react-star-ratings';
import DetailsContainer from '../detailsContainer';

const TestimonialSection = () => {
  return (
    <>
      <DetailsContainer
        componentType='testimonials'
        header='Customers Testmonials'
        description='As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation'
        className={'!block !mt-8'}
      >
          <Carousel
            autoplay={true}
            slidesToScroll={3}
            slidesToShow={3}
            dots={true}
            content={testimonials.map((testimonial, index) => (
              <div className='bg-gray-w1 px-4 py-6 rounded' key={index}>
                <div className='flex items-center gap-4'>
                  <img
                    src={testimonial.image}
                    alt=''
                    className='aspect-square rounded-full h-14 object-cover'
                  />
                  <div className='flex flex-col'>
                    <header className='text-lg font-bold capitalize'>
                      {testimonial.name}
                    </header>
                    <StarRatings
                      rating={testimonial.rating}
                      starDimension='20px'
                      starSpacing='1px'
                      starRatedColor='#DAA520'
                      numberOfStars={5}
                    />
                  </div>
                </div>
                <p className='mt-4 leading-8 text-gray-g1'>
                  {testimonial.designation}
                </p>
              </div>
            ))}
          />
      </DetailsContainer>
    </>
  );
};

export default TestimonialSection;
