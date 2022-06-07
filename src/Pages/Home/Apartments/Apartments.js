import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const { data: apartments, isLoading, error } = useQuery('properties', () =>
        fetch('https://warm-harbor-60965.herokuapp.com/apartments').then(res => {
            console.log(apartments)
            return res.json()
        }
        ))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='py-10'>
            <h1 className='text-4xl font-semibold pb-7 text-center'>Display Latest and Featured Properties</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    apartments.slice(0, 6).map(apartment => <Apartment key={apartment._id} apartment={apartment}></Apartment>)
                }

            </div>
        </div>
    );
};

export default Apartments;