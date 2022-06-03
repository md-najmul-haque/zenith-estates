import { faBuildingColumns, faCertificate, faHandHoldingHeart, faHouse, faLeaf, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyWePerfect.css'


const WhyWePerfect = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-10'>
            <div>
                <h2 className='text-3xl font-semibold py-3'>Why <span className='text-orange-400'>Zenith Estates</span> is the perfect partner for you?</h2>
                <button className='btn btn-link text-primary'>Consult with <span>Our Expert</span></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 g-10'>
                <div className='icon-container'>
                    <p><FontAwesomeIcon icon={faHouse} /></p>
                    <p>Super Fast delivery</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faLeaf} /></p>
                    <p>Eco-friendly</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faBuildingColumns} /></p>
                    <p>Luxury Design</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faHandHoldingHeart} /></p>
                    <p>High-end materials</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faTrophy} /></p>
                    <p>Awarded company</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faCertificate} /></p>
                    <p>Certifications</p>
                </div>
            </div>

        </div>
    );
};

export default WhyWePerfect;