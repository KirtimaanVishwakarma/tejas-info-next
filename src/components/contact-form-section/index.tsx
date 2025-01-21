import React from 'react';
import FormWrapper from '../formWrapper';
import { contactDetails, registerForm } from '@/constants/constant';
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
        <header className='text-2xl capitalize font-extrabold text-gray-g3'>
          contact info :
        </header>
        {contactDetails?.map((contact, ind) => (
          <div className='flex items-center gap-4' key={ind}>
            <contact.icon className='text-custom-primary' fontSize={'2rem'} />
            <div className='flex flex-col md:flex-row gap-0 font-extrabold text-lg md:text-xl text-gray-g1 md:gap-6'>
              {contact?.details.map((detail) => (
                <a
                  key={detail.link}
                  href={detail.link}
                  target='_blank'
                  className='font-extrabold text-lg md:text-xl text-gray-g1'
                  rel='noopener noreferrer'
                >
                  {detail?.header}
                </a>
              ))}
            </div>
          </div>
        ))}
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
