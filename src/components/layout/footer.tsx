import { footerOptions, SocialMediaLinks } from '@/constants/constant';
import Images from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
  return (
    <section className='flex flex-col divide-y-1 divide-gray-g1 relative z-20'>
      <footer className='bg-gray-b1'>
        <div className='max-w-8xl m-auto md:flex py-8 gap-4 h-full'>
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
                Follow us:
              </header>
              <div className='flex gap-6 mt-3'>
                {SocialMediaLinks.map((link, index) => (
                  <a
                    href={link.href}
                    key={index}
                    target='_blank'
                    className='bg-gray-w1 p-1 rounded group border border-gray-w1 cursor-pointer hover:border-custom-primary'
                  >
                    <link.icon
                      fontSize='1.5rem'
                      className='text-gray-g1 group-hover:text-custom-primary'
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className='flex flex-col md:flex-row gap-4 md:gap-0 pl-4 md:pl-0 mt-4 md:mt-0 justify-between w-full'>
            {footerOptions?.map((options) => (
              <div key={options.header} className='flex-1 h-fit'>
                <header className='text-gray-g2 text-lg font-semibold mb-4 capitalize'>
                  {options.header}
                </header>
                <ul className='text-gray-w1 flex flex-col gap-2'>
                  {options.links.map((link) => (
                    <li key={link.name} className='flex items-center gap-2'>
                      <MdKeyboardArrowRight />
                      <Link
                        href={link.href}
                        className=' hover:text-custom-primary transition-all capitalize'
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
          <div className='flex flex-col md:flex-row md:justify-center lg:justify-start lg:text-center'>
            <header className='text-gray-g2'>
              © 2024 All rights reserved :
            </header>
            <header className='text-custom-primary'>Tejas Infosystem</header>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
