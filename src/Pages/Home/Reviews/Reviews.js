import React, { useEffect, useState } from 'react';
import Loading from 'react-loading';
import { useQuery } from 'react-query';
import Review from '../Review/Review';


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // const { data: reviews, isLoading, error } = useQuery('reviews', () => fetch('reviews.json').then(res => {
    //     console.log(reviews);
    //     return res.json()
    // }))

    // if (isLoading) {
    //     return <Loading />
    // }


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