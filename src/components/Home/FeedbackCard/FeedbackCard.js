import React from 'react';
import './FeedbackCard.css'
const FeedbackCard = ({ feedback }) => {
    return (
        <div className="col-lg-4 d-flex justify-content-center">
            <div className="feedback-card p-3 px-3 border rounded-lg m-2 ">
                <div className="d-flex row">
                    <div className="col-md-8 d-flex flex-column  ">
                        <h3 className="feedback-name">{feedback.name}</h3>
                        <h5 className="feedback-post">{feedback.designation}</h5>
                    </div>
                </div>
                <div>
                    <h6 className="text-secondary feedback-details ">
                        {feedback.description}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;