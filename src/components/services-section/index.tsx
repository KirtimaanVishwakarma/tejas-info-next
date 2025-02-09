import { servicesData } from '@/constants/constant';
import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import DetailsContainer from '../detailsContainer';

const Services = () => {
  return (
    <DetailsContainer
      componentType='our services'
      header={`What We’re Offering?`}
      description={`We are providing a variety of services, including web development, app development, game development, custom software development, CRM solutions, digital marketing, and SEO. They focus on delivering innovative software solutions to help businesses improve their technological capabilities and online presence.`}
    >
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {servicesData.map((service, index: number) => (
          <div
            key={index}
            className='bg-gray-w1 hover-transition text-custom-primary rounded p-6 w-full flex flex-col gap-4 group'
          >
            <service.image fontSize='3.75rem' className='group-hover:text-gray-w1'/>
            <header className='text-black font-bold text-2xl group-hover:text-gray-w1'>
              {service.title}
            </header>
            <p className='text-gray-g1 font-medium group-hover:text-gray-w1'>
              {service.description}
            </p>
            <div className='flex items-center gap-2 group-hover:text-gray-w1'>
              <header className='capitalize text-custom-primary font-bold !text-xl !cursor-pointer group-hover:text-gray-w1'>
                Learn more
              </header>
              <HiArrowLongRight fontSize='1.125rem' />
            </div>
          </div>
        ))}
      </section>
    </DetailsContainer>
  );
};

export default Services;
