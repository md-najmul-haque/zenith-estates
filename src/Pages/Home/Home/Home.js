import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import WhyWePerfect from '../WhyWePerfect/WhyWePerfect';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Apartments />
            <WhyWePerfect />
        </div>
    );
};

export default Home;