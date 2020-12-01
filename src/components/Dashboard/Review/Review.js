import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { useHistory } from 'react-router-dom';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()

    const onSubmit = data => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review Added')
                    history.push("/")
                }
            })
    };

    return (
        <div className="row review-container">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-0">
                <div className="bg-white p-md-3 pt-md-3 d-flex justify-content-between">
                    <h4 className="p-3">Review</h4>
                    <h4 className="p-3">{loggedInUser.name}</h4>
                </div>
                <div className="p-md-5 mt-md-5 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="order-input-normal" name="name" placeholder="Name" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Name is required</span>} <br />

                        <input className="order-input-normal" name="designation" placeholder="Company’s name, Designation" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Designation is required</span>} <br />

                        <textarea className="order-input-details" name="description" placeholder="Description" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Description is required</span>} <br />

                        <input className="text-white rounded order-form-submit" type="submit" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Review;