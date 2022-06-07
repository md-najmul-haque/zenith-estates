import React from 'react';
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (



        <div class=" w-full mx-auto grid grid-cols-1 lg:grid-cols-3 my-12 p-10">

            <div className='mx-auto'>
                <div class="flex items-center">
                    <CountUp start={0} end={250} delay={0}>
                        {({ countUpRef }) => (
                            <div ref={countUpRef} class="text-7xl font-bold">250</div>
                        )}
                    </CountUp>
                    <div class="pl-10">
                        <p className='text-left'>MODERN UNITS SPREAD</p>
                        <p className='text-left'>OVER THREE FLOORS</p>
                    </div>
                </div>
            </div>

            <div className='mx-auto'>
                <div class="flex items-center">
                    <CountUp start={0} end={850} delay={0}>
                        {({ countUpRef }) => (
                            <div class="text-7xl font-bold"><span ref={countUpRef}>850</span><span>K</span></div>
                        )}
                    </CountUp>
                    <div class="text-7xl font-bold"></div>
                    <div class="pl-10">
                        <p className='text-left'>SQUARE FEET OF NATURE</p>
                        <p className='text-left'>AROUND THE BLOCK</p>
                    </div>
                </div>
            </div>

            <div className='mx-auto'>
                <div class="flex items-center">
                    <CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                            <div class="text-7xl font-bold"><span ref={countUpRef}>100</span><span>+</span></div>
                        )}
                    </CountUp>
                    <div class="pl-10">
                        <p className='text-left'>PARKING SPACES FOR</p>
                        <p className='text-left'>RESIDENTS AND GUESTS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default BusinessSummary;