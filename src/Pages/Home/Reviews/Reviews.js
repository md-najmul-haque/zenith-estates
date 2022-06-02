import React from 'react';

import Loading from 'react-loading';
import { useQuery } from 'react-query';
import Review from '../Review/Review';

const Reviews = () => {

    const { data: reviews, isLoading, error } = useQuery('reviews', () => fetch(`products.json`).then(res => {
        console.log(reviews);
        return res.json()
    }))

    if (isLoading === true) {
        return <Loading />
    }


    return (
        <div>
            <h1>Testimonials</h1>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;