import React from 'react';

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
                    <div class="badge badge-outline">Buy Now</div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;