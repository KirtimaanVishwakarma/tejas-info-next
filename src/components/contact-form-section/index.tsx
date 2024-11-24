import React from 'react';
import FormWrapper from '../formWrapper';
import { registerForm } from '@/constants/constant';
import Button from '../Buttons/button';
import DetailsContainer from '../detailsContainer';

const ContactForm = () => {
  return (
    <DetailsContainer
      componentType='contact'
      header='contact us for Any Questions'
      description='As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation'
      className='flex-col lg:flex-row'
    >
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
    </DetailsContainer>
  );
};

export default ContactForm;
