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
                <p>{description}</p>
                <p>{price}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Add To Cart</div>
                    <Link to='/purchase' class="badge badge-outline">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Apartment;