import Image from 'next/image';
import React from 'react';
import Images from '@/constants/images';
import { faqContents } from '@/constants/constant';
import DetailsContainer from '../detailsContainer';

const FAQ = () => {
  return (
    <DetailsContainer
      componentType='faq'
      header='Frequently Asked Questions'
      description='The integration of cohesive software solutions allows for precise
    control over achieving your project goals and ensuring accurate
    estimates.'
    >
      <div className='flex flex-col md:flex-row gap-4 mt-4'>
        <div className='flex-1'>
          <Image src={Images.Faq} alt='faq' className='' />
        </div>
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
    </DetailsContainer>
  );
};

export default FAQ;
