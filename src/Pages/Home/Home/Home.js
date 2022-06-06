import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import BuildInfo from '../BuildInfo/BuildInfo';
import BusinessSummary from '../BusinessSummary/BusinessSummary';

import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import WhyWePerfect from '../WhyWePerfect/WhyWePerfect';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyWePerfect />
            <Apartments />
            <BuildInfo />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;