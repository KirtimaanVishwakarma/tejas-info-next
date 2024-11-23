import { whyClientChooseUs } from '@/constants/constant';
import React from 'react';
import DetailsContainer from '../detailsContainer';

const ClientSection = () => {
  return (
    <DetailsContainer
      componentType='why choose us'
      header='why our clients choose us'
      description={`As a matter of fact the unification of the coherent software provides a
    strict control over The Accomplishment of Intended Estimation`}
    >
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {whyClientChooseUs.map((client, index) => (
          <div
            key={index}
            className='p-4 rounded bg-gray-w1 aspect-square flex flex-col justify-center gap-2'
          >
            <header className='text-5xl font-bold text-green-g1'>
              0{index + 1}.
            </header>
            <header className='font-extrabold text-2xl text-gray-b1 mt-4'>
              {client.header}
            </header>
            <p className='text-gray-g3 text-base font-medium leading-6'>
              {client.details}
            </p>
          </div>
        ))}
      </div>
    </DetailsContainer>
  );
};

export default ClientSection;
