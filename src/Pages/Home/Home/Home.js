import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import WhyWePerfect from '../WhyWePerfect/WhyWePerfect';

const Home = () => {
    return (
        <div>

            <Banner />
            <Apartments />
            <WhyWePerfect />
            <Reviews />



        </div>
    );
};

export default Home;