import React from 'react'
import Greenbtn from './Greenbtn'
import hero from '../assests/hero.jpg'


function Hero() {
    return (
        <div name='Home' className='flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left'>
            <div className='grid md:grid-cols-2 max-w-screen-xl m-auto px-3'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl text-gray-500'>Start Hosting Your dream with us</p>
                <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
                    <span className="text-lightColor">Scloud</span> Web Services
                </h1>
                <p className="text-base font-light text-gray-500 ">Bird dared and of such that has and demons just my. The the door i respiterespite its quoth, velvet more.</p>
                <Greenbtn title="Sign up" className="py-3 px-6 sw:w-8/2 my-8"/>

                </div>
                <div className=" justify-center items-center">
                <img src={hero}  alt="cloud image" className="w-3/4 ml-10 rounded-full"/>

                </div>



            </div>

        </div>

    )
}

export default Hero