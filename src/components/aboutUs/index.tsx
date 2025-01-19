import React from 'react';
import Button from '../Buttons/button';
import Image from 'next/image';
import Images from '@/constants/images';

import { FaMapLocation } from 'react-icons/fa6';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { GiConsoleController } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io';
const services: Array<{ header: string; icon: any }> = [
  { header: 'worldwide services', icon: FaMapLocation },
  { header: 'Support 24/7', icon: TfiHeadphoneAlt },
  { header: 'east to reach', icon: GiConsoleController },
  { header: 'first on field', icon: IoIosStar },
];
const experiencedServices: Array<{
  header: string;
  value: number;
}> = [
  { header: 'App Development', value: 70 },
  { header: 'UI/UX Design', value: 20 },
  { header: 'Web Development', value: 55 },
];
const AboutUs = () => {
  return (
    <div className='max-w-8xl m-auto'>
      <section className='flex flex-col lg:flex-row items-center gap-4 px-4 md:px-8 lg:pr-0'>
        <div className='lg:flex-1 lg:ml-4'>
          <header className='text-custom-primary uppercase font-bold text-sm'>
            about us
          </header>
          <header className='text-5xl font-extrabold capitalize tracking-tighter mb-4 md:whitespace-nowrap text-gray-g3'>
            The best IT solution since{' '}
            <span className='text-custom-primary'>2016</span>
          </header>
          <p className='text-gray-g1 font-medium mb-4 text-left leading-8  tracking-wider'>
            Although, final stages of the internal network gives a complete
            experience of The Parameter of Speculative Environment , Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eligendi voluptas
            quibusdam libero quos rem unde, sequi distinctio eum excepturi nobis
            facere expedita sint nulla aliquam, odio ea laboriosam hic?
            Consectetur ullam eveniet
          </p>
          <Button btnName={`Let's Connect`} />
        </div>
        <div className='md:flex-1 md:w-full'>
          <Image src={Images.GirlWithBoard} alt='' className='w-full' />
        </div>
      </section>
      <section className='flex flex-col lg:flex-row items-center gap-4 my-8 pr-4 md:pr-0'>
        <div className='flex-1 pl-4 md:px-8 w-full '>
          <Image src={Images.GuyWithPc} alt='' className='w-full' />
        </div>

        <div className='flex-1 px-4 md:px-8 lg:px-0'>
          <header className='text-5xl font-extrabold capitalize tracking-tighter mb-4 text-gray-g3'>
            We Deal With The Aspects Of Professional{' '}
            <span className='text-custom-primary'>IT Services</span>
          </header>
          <p className='text-gray-g1 mb-4'>
            Although, final stages of the internal network gives a complete
            experience of The Parameter of Speculative Environment
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {services.map((Service) => (
              <div
                key={Service.header}
                className='bg-gray-w1 group text-custom-primary p-4 w-full flex items-center gap-4 rounded group hover:text-gray-w2 hover:bg-custom-primary'
              >
                <Service.icon fontSize='2rem' />
                <header className=' text-black  capitalize text-lg font-bold group-hover:text-gray-w2 group-hover:bg-custom-primary'>
                  {Service.header}
                </header>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='flex flex-col lg:flex-row items-center gap-4 pr-4 md:px-8 lg:pr-0'>
        <div className='flex-1 px-4'>
          <header className='text-5xl font-extrabold capitalize tracking-tighter mb-4 text-balance text-gray-g3'>
            We Are Here To IT Solution With 8 Years Of{' '}
            <span className='text-custom-primary'>Experience</span>
          </header>
          <p className='text-gray-g1 font-medium mb-4 text-left'>
            We Are Here To IT Solutions offers expert services backed by 8 years
            of industry experience. Our commitment is to deliver innovative and
            reliable technology solutions tailored to your needs.
          </p>
          <div className=''>
            {experiencedServices.map((service) => (
              <div key={service.header}>
                <div className='flex justify-between text-lg'>
                  <header className='font-bold text-black'>
                    {service.header}
                  </header>
                  <header className='text-gray-g3 font-semibold'>
                    {service.value}%
                  </header>
                </div>
                <progress
                  className='progress w-full progress-error'
                  value={service.value}
                  max='100'
                ></progress>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 ml-4 md:ml-0 w-full px-4'>
          <Image src={Images.GuyWithSetting} alt='' className='w-full' />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
