import Image from 'next/image';
import React from 'react';
import Images from '@/constants/images';
import Button from '../Buttons/button';
import { navbarOptions } from '@/constants/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const router = useRouter();
  const closeDrawer = () => {
    const drawerInput: any = document.getElementById('my-drawer');
    if (drawerInput) {
      drawerInput.checked = false;
    }
  };
  return (
    <section className='bg-gray-w1 bg-opacity-50 py-3 absolute top-0 w-full z-20'>
      <nav className='max-w-8xl m-auto flex justify-between px-3'>
        <Image
          src={Images.Logo}
          alt='logo'
          className='w-36 cursor-pointer'
          onClick={() => router.push('/')}
        />
        <div className='hidden lg:flex items-center justify-center'>
          {navbarOptions.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className={`px-4 py-3 whitespace-nowrap font-semibold ${
                router?.pathname === nav.href ? 'text-custom-primary' : 'text-gray-g1'
              } hover:text-custom-primary transition-all cursor-pointer delay-150 text-sm`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <Button
          btnName={`Let's Connect`}
          onClick={() => router.push('/contact-us')}
          className='hidden lg:block'
        />
        <div className='drawer-content flex items-center justify-end lg:hidden'>
          <label htmlFor='my-drawer' className='drawer-button'>
            <RxHamburgerMenu color='#5e5e5e' fontSize='1.5rem' />
          </label>
        </div>
      </nav>
      <div className='drawer lg:hidden '>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-side '>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>

          <ul className='menu bg-gray-w2 text-base-content min-h-full w-80 md:w-1/2 p-4 flex flex-col justify-between'>
            <div className='flex flex-col gap-12'>
              <Image
                src={Images.Logo}
                alt='logo'
                className='w-36 cursor-pointer'
                onClick={() => {
                  router.push('/');
                  closeDrawer();
                }}
              />
              <div className='flex flex-col gap-4 w-3/4'>
                {navbarOptions.map((Nav) => (
                  <Link
                    onClick={closeDrawer}
                    href={Nav.href}
                    key={Nav.name}
                    className={`px-4 py-2 font-semibold ${
                      router?.pathname === Nav.href
                        ? 'text-custom-primary'
                        : 'text-gray-g1'
                    } hover:text-custom-primary transition-all cursor-pointer delay-150 flex items-center gap-4 text-sm md:text-base`}
                  >
                    <Nav.logo fontSize='1.3rem' />
                    {Nav.name}
                  </Link>
                ))}
              </div>
            </div>

            <Button
              btnName={`Let's Connect`}
              onClick={() => {
                router.push('/contact-us');
                closeDrawer();
              }}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
