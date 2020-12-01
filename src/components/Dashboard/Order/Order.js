import React, { useContext, useState } from 'react';
import './Order.css'
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useHistory, useParams } from 'react-router-dom';

const Order = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const { title } = useParams();

    const onSubmit = data => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Added')
                    history.push("/")
                }
            })
    };
    return (
        <div className="row order-container">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-0">
                <div className="bg-white p-md-3 pt-md-3  d-flex justify-content-between">
                    <h4 className="p-3">Order</h4>
                    <h4 className="p-3">{loggedInUser.name}</h4>
                </div>
                <div className="p-md-5 p-0 m-md-3 mt-0 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="order-input-normal" name="name" defaultValue={loggedInUser.name} placeholder="Your Name / Company’s Name" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Name is required</span>} <br />

                        <input className="order-input-normal" name="email" value={loggedInUser.email} placeholder="Your Email Address" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Name is required</span>} <br />

                        <input className="order-input-normal" name="serviceTitle" value={title} placeholder="Service Name" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Name is required</span>} <br />

                        <input className="order-input-normal" name="price" placeholder="Price" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Designation is required</span>} <br />

                        <textarea className="order-input-details" name="description" placeholder="Project Details" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Description is required</span>} <br />

                        <input className="text-white rounded order-form-submit send" type="submit" value="Send" />
                    </form>
                </div>

            </div>

        </div>

    );
};

export default Order;