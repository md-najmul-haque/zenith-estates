import React from 'react';

const BusinessSummary = () => {
    return (

        <div class=" w-full mx-auto grid grid-cols-1 lg:grid-cols-3 my-12 p-10">

            <div className='mx-auto'>
                <div class="flex items-center">
                    <div class="text-7xl font-bold">250</div>
                    <div class="pl-10">
                        <p className='text-left'>MODERN UNITS SPREAD</p>
                        <p className='text-left'>OVER THREE FLOORS</p>
                    </div>
                </div>
            </div>

            <div className='mx-auto'>
                <div class="flex items-center">
                    <div class="text-7xl font-bold">850K</div>
                    <div class="pl-10">
                        <p className='text-left'>SQUARE FEET OF NATURE</p>
                        <p className='text-left'>AROUND THE BLOCK</p>
                    </div>
                </div>
            </div>

            <div className='mx-auto'>
                <div class="flex items-center">
                    <div class="text-7xl font-bold">100+</div>
                    <div class="pl-10">
                        <p className='text-left'>PARKING SPACES FOR</p>
                        <p className='text-left'>RESIDENTS AND GUESTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;