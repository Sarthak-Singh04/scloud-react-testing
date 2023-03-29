import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Greenbtn from './Greenbtn';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const navigation = [

        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Services'
        },
        {
            id: 3,
            link: 'About'
        },
        {
            id: 4,
            link: 'Support'
        },
        {
            id: 5,
            link: 'Pricing'
        },

    ]
    return (
        <div className="w-screen h-20 z-20 fixed bg-gray-900 text-white">
            <div className="px-3 flex items-center justify-between w-full h-full">
                <div className="flex item-center">
                    <h1 className="text-3xl font-bold">Scloud</h1>
                </div>
                <ul className="hidden md:flex">
                    {navigation.map(({ id, link }) => (
                        <li key={id} className="p-4 cursor-pointer hover:text-lightColor duration-200" >
                            {link}
                        </li>
                    ))}
                    <div className='hidden md:flex mr-4'>
                        <Greenbtn title="Sign in" className="px-6 py-2" />
                    </div>
                </ul>

                <div className='md:hidden flex'>
                    <div className='cursor-pointer' onClick={() => setNavbar(true)}>
                        <FaBars size={30} />
                    </div>
                </div>
                {navbar && (
                    <div className="md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-filter backdrop-blur">
                        <div className="fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-300">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-bold cursor-pointer">Scloud</h2>
                                <div className="p-3 cursor-pointer" onClick={() => setNavbar(false)}>
                                    <FaTimes size={30} />
                                </div>
                            </div>

                            <ul className="mt-10 flex flex-col gap-4">
                                <li>
                                    <Greenbtn className=" px-12 py-3" title="Sign in" />
                                </li>
                                {navigation.map(({ id, link }) => (
                                    <li key={id} className="p-4 cursor-pointer hover:text-lightColor duration-200">
                                        {link}
                                    </li>
                                ))}
                            </ul>

                            <div className="hidden md:flex mt-6">
                                <Greenbtn className="px-6 py-2" title="Sign in" />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div >
    );
}

export default Navbar;
