import React, { useEffect, useState } from 'react';
import Loading from 'react-loading';
import { useQuery } from 'react-query';
import Review from '../Review/Review';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Reviews = (props) => {

    const { data: reviews, isLoading, error } = useQuery('reviews', () => fetch('reviews.json').then(res => {
        console.log(reviews);
        return res.json()
    }))

    if (isLoading) {
        return <Loading />
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div>
            <h1 className='text-6xl font-semibold text-center py-5'>Testimonials</h1>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    reviews.slice(0, 6).map(review => <Review key={review.id} review={review}></Review>)
                }
            </Carousel>
        </div>
    );
};

export default Reviews;