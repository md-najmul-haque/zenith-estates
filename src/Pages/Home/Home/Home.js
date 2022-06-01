import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Apartments />
        </div>
    );
};

export default Home;