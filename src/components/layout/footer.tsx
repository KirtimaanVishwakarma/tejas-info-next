import { footerOptions } from '@/constants/constant';
import Images from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section className='flex flex-col divide-y-1 divide-gray-g1'>
      <footer className='bg-gray-b1'>
        <div className='max-w-8xl m-auto flex py-8 gap-4 h-full'>
          <section className='h-auto basis-1/3 rounded bg-white p-4 flex flex-col justify-between mx-4'>
            <div className='flex flex-col'>
              <Image
                src={Images.Logo}
                alt='logo'
                height={32}
                className='my-2'
              />
              <header className='text-gray-g2 font-semibold text-base leading-7'>
                Empowering Your Vision with Innovative Software Solutions.
              </header>
            </div>
            <div>
              <header className='font-extrabold text-lg text-gray-g2'>
                Follow us
              </header>
            </div>
          </section>

          <section className='flex justify-between w-full'>
            {footerOptions?.map((options) => (
              <div key={options.header} className='flex-1 h-fit'>
                <header className='text-gray-g2 text-lg font-semibold mb-4'>
                  {options.header}
                </header>
                <ul className='text-gray-w1 flex flex-col gap-2'>
                  {options.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className=' hover:text-green-g1 transition-all'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </footer>
      <section className='bg-gray-b1'>
        <div className='max-w-8xl m-auto py-4'>
          <div className='flex'>
            <header className='text-gray-g2'>
              © 2024 All rights reserved :
            </header>
            <header className='text-gray-w2'>RisuTech Global</header>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
