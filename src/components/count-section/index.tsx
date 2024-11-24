import React from 'react';

const countDetails: Array<{
  count: string;
  title: string;
}> = [
  { count: '200+', title: 'happy clients' },
  { count: '30', title: 'team member' },
  { count: '250+', title: 'complete project' },
  { count: '8+', title: 'Years Of Exprience' },
];
const CountSection = () => {
  return (
    <section className='bg-gray-b1'>
      <div className='max-w-8xl m-auto flex flex-col gap-4 md:flex-row md:gap-0 justify-between text-center py-12'>
        {countDetails.map((count) => (
          <div key={count.title} className='text-5xl flex-1'>
            <header className='text-green-g1 font-extrabold'>{count.count}</header>
            <header className='text-white text-2xl mt-2 font-extrabold capitalize'>{count.title}</header>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountSection;
