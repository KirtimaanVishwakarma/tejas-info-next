import { testimonials } from '@/constants/constant';
import React from 'react';
import Carousel from '../carousel';
import StarRatings from "react-star-ratings"

const TestimonialSection = () => {
  return (
    <section className='px-4 max-w-8xl m-auto my-8'>
      <header className='text-green-g1 font-bold'>testimonials</header>
      <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3 text-gray-g3'>
        Customers Testmonials
      </header>
      <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
        As a matter of fact the unification of the coherent software provides a
        strict control over The Accomplishment of Intended Estimation
      </header>
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
    </section>
  );
};

export default TestimonialSection;
