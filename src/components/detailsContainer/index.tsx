import React from 'react';

interface Container {
  children: React.ReactNode;
  componentType: string;
  header: string;
  description: string;
  className?: string;
}
const DetailsContainer = ({
  children,
  componentType,
  header,
  description,
  className,
}: Container) => {
  return (
    <section className='px-4 max-w-8xl m-auto w-full'>
      <header className='text-green-g1 font-bold uppercase'>
        {componentType}
      </header>
      <header className='text-5xl font-extrabold capitalize tracking-tighter mb-3 text-gray-g3'>
        {header}
      </header>
      <header className='font-normal text-gray-g1 text-base tracking-wider w-3/5 leading-8'>
        {description}
      </header>
      <div className={`flex gap-4 mt-4 ${className || ''}`}>{children}</div>
    </section>
  );
};

export default DetailsContainer;
