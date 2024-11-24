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

const About = () => {
  return (
    <section className='m-auto mb-8'>
      <div className='w-full relative bg-gray-w2 pt-24'>
        <PageContent
          title='about us'
          content={` RisuTech Global is a leading software development company dedicated to
          delivering innovative technology solutions. Specializing in web
          development, application development, game development, and custom
          software solutions, we cater to diverse business needs across various
          industries. Our expert team harnesses the latest technologies to
          create user-friendly, high-performance applications and websites. In
          addition to development services, we offer comprehensive digital
          marketing solutions, including SEO strategies that enhance online
          visibility and drive traffic. At RisuTech Global, we prioritize
          customer satisfaction and work collaboratively with clients to
          understand their unique goals, ensuring tailored solutions.`}
          stepper={[{ header: 'home', href: '/' }, { header: 'about us' }]}
        />
        <div className='flex flex-col gap-8'>
        <AboutUs />
        <FAQ />
        </div>
      </div>
    </section>
  );
};

About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
