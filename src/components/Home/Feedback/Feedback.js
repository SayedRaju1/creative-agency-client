import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import './Feedback.css'


const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    var shuffle = require('shuffle-array'),
        shuffledReviews = reviews;

    shuffle(shuffledReviews);

    return (
        <div className="feedback-container pt-2 mt-5">
            <div className="">
                <h1 className=" section-header text-center  m-5 p-5">Client <span className="services-span">Feedback</span></h1>
            </div>
            <div className="row mx-lg-5 px-lg-5 mx-xl-5 px-xl-5 m-5 d-flex justify-content-center ">
                {
                    shuffledReviews.slice(0, 6).map(feedback => <FeedbackCard feedback={feedback}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default Feedback;