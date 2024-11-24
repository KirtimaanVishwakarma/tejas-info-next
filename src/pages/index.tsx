import AboutUs from '@/components/aboutUs';
import Carousel from '@/components/carousel';
import ClientSection from '@/components/client-section';
import ContactForm from '@/components/contact-form-section';
import CountSection from '@/components/count-section';
import FAQ from '@/components/FAQ';
import HeroSection from '@/components/hero-section';
import Layout from '@/components/layout';
import Map from '@/components/map';
import OurTeam from '@/components/our-team-section';
import Services from '@/components/services-section';
import TestimonialSection from '@/components/testmonial-section';
import { clients } from '@/constants/constant';
import React from 'react';

const Home = () => {
  return (
    <section className='m-auto'>
      <HeroSection />
      <div className='w-full relative z-20 bg-gray-w2 flex flex-col gap-8 md:gap-8 lg:gap-16'>
        <Services />
        <AboutUs />
        <CountSection />
        <ClientSection />
        <FAQ />
        <section className='bg-gray-w1'>
          <div className='max-w-8xl m-auto py-8'>
            <Carousel
              content={clients.map((client, index) => (
                <div className='w-full h-full' key={index}>
                  <img src={client} alt='' className='h-full' />
                </div>
              ))}
            />
          </div>
        </section>
        <TestimonialSection />
        <OurTeam />
        <ContactForm />
        <Map />
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
