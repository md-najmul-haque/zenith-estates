import React from 'react';
import { Link } from 'react-router-dom';

const Apartment = ({ apartment }) => {
    const { name, img, description, price } = apartment;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt="apartments" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-justify'>{description}</p>
                <p className='text-justify'>Price: $ {price}</p>
                <div class="card-actions justify-end">
                    <Link to='/purchase' class="btn btn-outline btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Apartment;