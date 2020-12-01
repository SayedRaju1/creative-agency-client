import React from 'react';
import './MyServiceDetails.css'

const MyServiceDetails = (props) => {
    const { serviceTitle, price, description, email } = props.myService
    // console.log(props.myService);
    return (
        <div className="border bg-white m-3 p-3 rounded-lg col-md-5">
            <h3>{serviceTitle}</h3>
            <p>Description: {description}</p>
            <h6>Price: $ {price}</h6>
            <small>{email}</small>
        </div>
    );
};

export default MyServiceDetails;