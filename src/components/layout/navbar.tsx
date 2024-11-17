import Image from 'next/image';
import React from 'react';
import Images from '@/constants/images';
import Button from '../Buttons/button';
import { navbarOptions } from '@/constants/constant';
import Link from 'next/link';

const Navbar = () => {
  return (
    <section className='bg-gray-w1 py-3'>
      <nav className='max-w-8xl m-auto  flex justify-between px-3'>
        <Image src={Images.Logo} alt='logo' className='w-36' />
        <div className='flex items-center justify-center'>
          {navbarOptions.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className='px-4 py-3 whitespace-nowrap font-semibold text-gray-g1 hover:text-green-g1 transition-all cursor-pointer delay-150 text-sm'
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <Button btnName={`Let's Connect`} className='' />
      </nav>
    </section>
  );
};

export default Navbar;
