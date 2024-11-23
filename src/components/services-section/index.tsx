import { servicesData } from '@/constants/constant';
import Icon from '@/components/customize-icon';
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
    </DetailsContainer>
  );
};

export default Services;
