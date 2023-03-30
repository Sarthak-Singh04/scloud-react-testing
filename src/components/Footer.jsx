import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaTwitch } from 'react-icons/fa';
import Greenbtn from './Greenbtn';

function Footer() {
  return (
    <div className='w-full bg-gray-900  text-gray-400 py-8 border-t-2 h-full'>
      <div className='max-w-5xl mx-auto  pt-10 px-6'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          <div className='w-full md:w-1/2'>
            <p className='text-center md:text-left text-lg font-bold mb-4'>
              Follow us on social media
            </p>
            <div className='flex justify-center md:justify-start gap-8'>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer hover:scale-105 duration-200'>
                <FaFacebook size={40} />
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer hover:scale-105 duration-200'>
                <FaLinkedin size={40} />
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer hover:scale-105 duration-200'>
                <FaTwitch size={40} />
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer hover:scale-105 duration-200'>
                <FaTwitter size={40} />
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-center md:text-left text-lg font-bold mb-4'>
              Subscribe to our newsletter
            </p>
            <form className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                name='email'
                className='w-full p-2 rounded-md bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                placeholder='Enter your email'
              />
              <Greenbtn title='Subscribe' className='px-6 py-2 text-darkColor' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
