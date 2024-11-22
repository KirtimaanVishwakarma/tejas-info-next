import React from 'react';
import FormWrapper from '../formWrapper';
import { registerForm } from '@/constants/constant';
import Button from '../Buttons/button';

const ContactForm = () => {
  return (
    <section className='text-gray-g3 px-4 max-w-8xl m-auto'>
      <div>
        <header className='text-green-g1 text-sm font-bold uppercase'>
          contact
        </header>
        <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3'>
          contact us for Any Questions
        </header>
        <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
          As a matter of fact the unification of the coherent software provides
          a strict control over The Accomplishment of Intended Estimation
        </header>
      </div>
      <div className='my-2 flex mt-4'>
        <div className='flex-1 flex flex-col gap-6'>
          <header className='text-2xl capitalize font-extrabold'>
            contact info :
          </header>
          <div>
            <header className='font-extrabold text-xl text-gray-g1'>
              info@risutechglobal.com
            </header>
          </div>
          <div>
            <header className='font-extrabold text-xl text-gray-g1'>
              +91 9654691007 , +91 8081954350
            </header>
          </div>
          <div>
            <header className='font-extrabold text-xl text-gray-g1'>
              M-28, Mehak Eco City, Noida, India 203207
            </header>
          </div>
          <div>
            <header className='font-extrabold text-xl text-gray-g1'>
              risutechglobal
            </header>
          </div>
        </div>
        <div className='flex-1'>
          <div className='grid grid-cols-2 w-full gap-x-4 gap-y-2 mb-4'>
            <FormWrapper formObject={registerForm} />
          </div>
          <Button btnName='Send' />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
