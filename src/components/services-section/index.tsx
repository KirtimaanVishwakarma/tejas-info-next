import { servicesData } from '@/constants/constant';
import Icon from '@/components/customize-icon';
import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const Services = () => {
  return (
    <div className='max-w-8xl m-auto px-4'>
      <header className='text-green-g1 font-bold capitalize'>
        our services
      </header>
      <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3 text-gray-g3'>
        What We’re Offering?
      </header>
      <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
        We are providing a variety of services, including web development, app
        development, game development, custom software development, CRM
        solutions, digital marketing, and SEO. They focus on delivering
        innovative software solutions to help businesses improve their
        technological capabilities and online presence.
      </header>
      <section className='grid grid-cols-3 gap-4'>
        {servicesData.map((service, index: number) => (
          <div
            key={index}
            className='bg-gray-w1 rounded p-6 w-full flex flex-col gap-4'
          >
            <Icon icon={<service.image />} className='text-green-g1 text-6xl' />
            <header className='text-black font-bold text-2xl'>
              {service.title}
            </header>
            <p className='text-gray-g1 font-medium'>{service.description}</p>
            <div className='flex items-center gap-2'>
              <header className='capitalize text-green-g1 font-bold !text-xl'>
                Learn more
              </header>
              <Icon
                icon={<HiArrowLongRight />}
                className='text-green-g1 !text-lg'
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
