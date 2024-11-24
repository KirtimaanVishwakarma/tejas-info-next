import { SocialMediaLinks } from '@/constants/constant';
import React from 'react';
import Button from '../Buttons/button';
import AnimationBackground from '../animations';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className='w-full relative bg-gray-w2 min-h-96 h-screen flex justify-center items-center flex-col'>
      <div className='max-w-8xl m-auto flex justify-center items-center mx-2 md:mx-0 flex-col gap-2 md:gap-4 relative z-10'>
        <div className='flex gap-4 justify-center'>
          {SocialMediaLinks.map((link, index) => (
            <div key={index} className='bg-gray-w1 p-2 rounded'>
              <link.icon color="#5e5e5e" fontSize="1.5rem"/>
            </div>
          ))}
        </div>
        <header className='text-4xl md:text-5xl text-center tracking-tighter text-gray-b1 font-bold'>
          Empowering Your Vision with Innovative{' '}
          <span className='text-green-g1'>Software</span> Solutions.
        </header>
        <p className='text-gray-g1 md:w-4/5 text-center leading-7 md:leading-8 text-base'>
          We specialize in delivering innovative software solutions tailored to
          your unique business needs. Our expert team excels in web development,
          app development, and digital marketing, ensuring a strong online
          presence. We focus on creating flexible, scalable solutions that
          enhance your technological capabilities and drive growth. Let us
          partner with you to transform your vision into reality!
        </p>
        <div className='flex gap-4 mt-2 md:mt-0'>
          <Button
            btnName='Join Now'
            onClick={() => router.push('/contact-us')}
          />
          <Button
            btnName='learn more'
            btnType={'secondary'}
            onClick={() => router.push('/about')}
          />
        </div>
      </div>
      <AnimationBackground
        className={'absolute h-full w-full left-0 top-0 z-0'}
      />
    </section>
  );
};

export default HeroSection;
