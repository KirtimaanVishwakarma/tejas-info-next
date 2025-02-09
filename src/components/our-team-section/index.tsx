import { ourTeamMember } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';
import DetailsContainer from '../detailsContainer';

const OurTeam = () => {
  return (
    <DetailsContainer
      componentType='team'
      header='our team'
      description='As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {ourTeamMember.map((member, index) => (
          <div key={index} className='rounded overflow-hidden'>
            <Image src={member.image} alt='' />
            <div className='text-center bg-gray-w1 p-4 text-gray-b1'>
              <header className='capitalize text-3xl font-bold'>
                {member.name}
              </header>
              <header className='font-bold text-base my-2 text-gray-g1'>
                {member.designation}
              </header>
              <div className='w-fit m-auto flex gap-6 items-center mb-2'>
                {member.socialMedia.map((socialMedia, ind) => (
                  <socialMedia.icon className="text-gray-g1 hover:text-custom-primary cursor-pointer" fontSize='1.5rem' key={ind}/>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </DetailsContainer>
  );
};

export default OurTeam;
