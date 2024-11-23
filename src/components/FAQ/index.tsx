import Image from 'next/image';
import React from 'react';
import Images from '@/constants/images';
import { faqContents } from '@/constants/constant';

const FAQ = () => {
  return (
    <section className='px-4 max-w-8xl m-auto'>
      <header className='text-green-g1 font-bold'>FAQ</header>
      <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3 text-gray-g3'>
        Frequently Asked Questions
      </header>
      <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
        The integration of cohesive software solutions allows for precise
        control over achieving your project goals and ensuring accurate
        estimates.
      </header>
      <div className='flex gap-4 mt-4'>
        <Image src={Images.Faq} alt='faq' className='flex-1' />
        <div className='flex flex-1 items-center'>
          <div className='flex flex-col gap-4'>
            {faqContents?.map((faq, index) => (
              <div className='collapse bg-gray-w1 rounded' key={index}>
                <input type='radio' name='my-accordion-1' />
                <div className='collapse-title text-xl font-bold text-black'>
                  {faq.header}
                </div>
                <div className='collapse-content'>
                  <p className='text-gray-g1 font-medium'>{faq.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
