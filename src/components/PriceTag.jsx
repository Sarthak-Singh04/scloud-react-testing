import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Greenbtn from './Greenbtn'

function PriceTag({priceCategory,dollar}) {
    return (
        <div className="bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-2xl">
            <div className='text-center bg-darkColor text-white py-4'>
                <p>{priceCategory}</p>
            </div>
            <div className="p-4">
                <p className="text-6xl font-bold py-4 flex">
                    {`$${ dollar} `} <span className='text-xl text-darkColor flex flex-col justify-end'>/mo</span>
                </p>
            </div>
            <p className='text-2xl py-8 px-4  text-slate-500'>
                What ease into if i pallas this to. The never the my evilprophet angels the or pallid thee, angels came all plutonian each hath i by from i. We you.
            </p>
            <div className='text-2xl  text-slate-500'>
                <div className='px-4'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <p key={index} className='flex text-darkColor items-center py-3'>
                            <FaPlusCircle className="w-5 mr-3 text-lightColor" />Feature {index + 1}
                        </p>
                    ))}



                </div>
                <Greenbtn title="Get started" className="w-full py-4 mt-14 " />
            </div>

        </div>

    )
}

export default PriceTag