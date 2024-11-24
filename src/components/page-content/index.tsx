import Link from 'next/link';
import React from 'react';

interface PageContentInterface {
  title: string;
  content: string;
  stepper: Array<{ header: string; href?: string }>;
}
const PageContent = ({ title, content, stepper }: PageContentInterface) => {
  return (
    <section className='bg-gray-b1 text-gray-w1 py-6 mb-8'>
      <div className='max-w-8xl m-auto px-4 flex flex-col gap-3'>
        <div className='flex gap-2 items-center text-lg font-bold capitalize'>
          {stepper.map((step) => {
            if (step.href) {
              return (
                <div key={step.header} className='flex items-center gap-2'>
                  <Link href={step.href}>{step.header}</Link>
                  <header>/</header>
                </div>
              );
            }
            return <header key={step.header}>{step.header}</header>;
          })}
        </div>
        <header className='text-3xl md:text-5xl capitalize font-extrabold'>{title}</header>
        <p className='leading-8 tracking-wider text-sm font-medium'>{content}</p>
      </div>
    </section>
  );
};

export default PageContent;
