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
import PageContent from '@/components/page-content';
import Services from '@/components/services-section';
import TestimonialSection from '@/components/testmonial-section';
import { clients } from '@/constants/constant';
import React from 'react';

const Home = () => {
  return (
    <section className='m-auto mb-8'>
      <div className='w-full relative pt-24 bg-gray-w2'>
        <PageContent
          title='our services'
          content={`We are providing a variety of services, including web development, app development, game development, custom software development, CRM solutions, digital marketing, and SEO. They focus on delivering innovative software solutions to help businesses improve their technological capabilities and online presence.`}
          stepper={[{ header: 'home', href: '/' }, { header: 'services' }]}
        />
        <div className='flex flex-col gap-8'>
          <Services />
          <FAQ />
        </div>
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
