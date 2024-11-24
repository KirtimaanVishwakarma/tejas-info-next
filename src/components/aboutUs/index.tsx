import React from 'react';
import Button from '../Buttons/button';
import Image from 'next/image';
import Images from '@/constants/images';

const services: Array<{ header: string }> = [
  { header: 'worldwide services' },
  { header: 'Support 24/7' },
  { header: 'east to reach' },
  { header: 'first on field' },
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
      <section className='flex flex-col md:flex-row items-center gap-4 mr-4 md:mr-0'>
        <div className='md:flex-1 ml-4'>
          <header className='text-green-g1 uppercase font-bold text-sm'>
            about us
          </header>
          <header className='text-5xl font-extrabold capitalize tracking-tighter mb-4 md:whitespace-nowrap text-gray-g3'>
            The best IT solution since{' '}
            <span className='text-green-g1'>2016</span>
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
        <div className='md:flex-1 pl-4 md:pl-0'>
          <Image src={Images.GirlWithBoard} alt='' className='w-full' />
        </div>
      </section>
      <section className='flex flex-col md:flex-row items-center gap-4 my-8 mr-4 md:mr-0 md:my-0'>
        <div className='flex-1 ml-4'>
          <Image src={Images.GuyWithPc} alt='' className='w-full' />
        </div>

        <div className='flex-1 pl-4 md:pl-0'>
          <header className='text-5xl font-extrabold capitalize tracking-tighter mb-4 text-gray-g3'>
            We Deal With The Aspects Of Professional{' '}
            <span className='text-green-g1'>IT Services</span>
          </header>
          <p className='text-gray-g1 mb-4'>
            Although, final stages of the internal network gives a complete
            experience of The Parameter of Speculative Environment
          </p>
          <div className='grid grid-cols-2 gap-2'>
            {services.map((service) => (
              <div key={service.header} className='bg-gray-w1 p-4'>
                <header className='text-center text-black rounded capitalize text-lg font-bold'>
                  {service.header}
                </header>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='flex flex-col md:flex-row items-center gap-4  mr-4 md:mr-0'>
        <div className='flex-1 pl-4'>
          <header className='text-5xl font-extrabold capitalize tracking-tighter mb-4 text-balance text-gray-g3'>
            We Are Here To IT Solution With 8 Years Of{' '}
            <span className='text-green-g1'>Experience</span>
          </header>
          <p className='text-gray-g1 font-medium mb-4 text-left'>
            We Are Here To IT Solutions offers expert services backed by 8 years
            of industry experience. Our commitment is to deliver innovative and
            reliable technology solutions tailored to your needs.
          </p>
          <div>
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
                  className='progress w-full progress-success'
                  value={service.value}
                  max='100'
                ></progress>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 ml-4 md:ml-0'>
          <Image src={Images.GuyWithSetting} alt='' className='w-full' />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
