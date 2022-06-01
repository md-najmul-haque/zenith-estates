import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const { data: apartments, isLoading, error } = useQuery('properties', () =>
        fetch('products.json').then(res => {
            console.log(apartments)
            return res.json()
        }
        ))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-12 block'>
            <h1>Display Latest and Featured Properties</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    apartments.map(apartment => <Apartment key={apartment.id} apartment={apartment}></Apartment>)
                }

            </div>
        </div>
    );
};

export default Apartments;