import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import WhyWePerfect from '../WhyWePerfect/WhyWePerfect';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Apartments />
            <WhyWePerfect />
            <Footer />

        </div>
    );
};

export default Home;