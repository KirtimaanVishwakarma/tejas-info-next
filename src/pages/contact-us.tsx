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
          title='contact us'
          content={`Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment`}
          stepper={[{ header: 'home', href: '/' }, { header: 'contact' }]}
        />
        <ContactForm />
        <Map />
        <FAQ />
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
