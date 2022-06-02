import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'


const Banner = () => {
    return (
        <div class="hero">
            <img src={banner1} style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} alt="" />
            <div class="hero-overlay bg-opacity-60"></div>

            <div class="hero-content text-center text-neutral-content">

                <div class="max-w-3xl">
                    <h1 class="mb-5 text-6xl font-bold">Luxury Villa in New York</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">View Project</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;