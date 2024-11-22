import AboutUs from '@/components/aboutUs';
import ContactForm from '@/components/contact-form-section';
import CountSection from '@/components/count-section';
import FAQ from '@/components/FAQ';
import Layout from '@/components/layout';
import Map from '@/components/map';
import React from 'react';

const Home = () => {
  return (
    <section className='m-auto'>
      <AboutUs />
      <CountSection />
      <FAQ />
      <ContactForm />
      <Map />
    </section>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
