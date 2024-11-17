import ContactForm from '@/components/contact-form-section';
import Layout from '@/components/layout';
import Map from '@/components/map';
import React from 'react';

const Home = () => {
  return (
    <section className='max-w-8xl m-auto'>
      <ContactForm />
      <Map />
    </section>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
