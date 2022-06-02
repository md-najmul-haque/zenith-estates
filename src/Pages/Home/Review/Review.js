import React from 'react';
import defaultUser from '../../../assets/user/defaultUser.png'

const Review = ({ review }) => {
    const { name, feedback, img, country, rating } = review
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mb-5 mx-auto">
            <div className="card-body items-center text-center">
                <p className="card-title"> <img style={{ width: 40 }} className='w-6/12' src={img ? img : defaultUser} alt="" /> {name}</p>
                <p>Review: {feedback}</p>
                <p>Rating: {rating}</p>
                <p>Country: {country}</p>
            </div>
        </div>
    );
};

export default Review;