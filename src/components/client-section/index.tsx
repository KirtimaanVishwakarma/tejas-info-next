import { whyClientChooseUs } from '@/constants/constant';
import React from 'react';

const ClientSection = () => {
  return (
    <div className='max-w-8xl m-auto px-4 mb-8'>
      <header className='text-green-g1 font-bold'>why choose us</header>
      <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3 text-gray-g3'>
        why our clients choose us
      </header>
      <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
        As a matter of fact the unification of the coherent software provides a
        strict control over The Accomplishment of Intended Estimation
      </header>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {whyClientChooseUs.map((client, index) => (
          <div key={index} className='p-4 rounded bg-gray-w1 aspect-square flex flex-col justify-center gap-2'>
            <header className='text-5xl font-bold text-green-g1'>0{index+1}.</header>
            <header className='font-extrabold text-2xl text-gray-b1 mt-4'>{client.header}</header>
            <p className='text-gray-g3 text-base font-medium leading-6'>{client.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
