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

const About = () => {
  return (
    <section className='m-auto'>
      <div className='w-full relative bg-gray-w2 pt-24'>
        <AboutUs />
        <FAQ />
      </div>
    </section>
  );
};

About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
