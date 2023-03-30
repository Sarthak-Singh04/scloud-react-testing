import React from 'react'

import PriceTag from './PriceTag'

function Pricing() {
    return (
        <div name="Pricing" className='w-full h-fit text-white bg-gray-900'>
            <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
                <div className='px-4 py-12 text-center'>
                    <h2 className="text-5xl font-bold text-center">
                        Pricing
                    </h2>
                    <p className='text-xl py-8 text-gray-500 text-center'>
                        What ease into if i pallas this to. The never the my evilprophet angels the or pallid thee, angels came all plutonian each hath i by from i. We you.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 ">
                <PriceTag priceCategory="Hobby" dollar="55"/>
                <PriceTag priceCategory="Business" dollar="99"/>
              

                </div>


            </div>

        </div>)

}

export default Pricing