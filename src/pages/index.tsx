import AboutUs from '@/components/aboutUs';
import ContactForm from '@/components/contact-form-section';
import CountSection from '@/components/count-section';
import FAQ from '@/components/FAQ';
import HeroSection from '@/components/hero-section';
import Layout from '@/components/layout';
import Map from '@/components/map';
import Services from '@/components/services-section';
import React from 'react';

const Home = () => {
  return (
    <section className='m-auto'>
      <HeroSection />
      <div className='w-full relative z-20 bg-gray-w2'>
          <Services />
          <AboutUs />
          <CountSection />
          <FAQ />
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
