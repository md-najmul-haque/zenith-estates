import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (

        <header>
            <div class="hero min-h-screen" banner-container>
                <img src={banner1} style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} alt="" />
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Banner;