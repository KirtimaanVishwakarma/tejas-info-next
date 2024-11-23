import { ourTeamMember } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';
import Icon from '../customize-icon';

const OurTeam = () => {
  return (
    <section className='px-4 max-w-8xl m-auto my-8'>
      <header className='text-green-g1 font-bold uppercase'>team</header>
      <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3 text-gray-g3'>
        our team
      </header>
      <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
        As a matter of fact the unification of the coherent software provides a
        strict control over The Accomplishment of Intended Estimation
      </header>
      <div className='grid grid-cols-4 gap-4'>
        {ourTeamMember.map((member, index) => (
          <div key={index} className='rounded overflow-hidden'>
            <Image src={member.image} alt='' />
            <div className='text-center bg-gray-w1 p-4 text-gray-b1'>
              <header className='capitalize text-3xl font-bold'>{member.name}</header>
              <header className='font-bold text-base my-2'>{member.designation}</header>
              <div className='w-fit m-auto flex gap-2 items-center'>
                {member.socialMedia.map((socialMedia, ind) => (
                  <Icon
                    icon={<socialMedia.icon/>}
                    key={ind}
                    className='text-2xl text-gray-g1'
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
