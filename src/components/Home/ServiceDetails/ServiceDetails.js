import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { title, image, description } = props.service
    return (
        <Link className="text-decoration-none   text-reset mb-3  col-md-3 col-sm-8 d-flex justify-content-center flex-column p-lg-5 m-lg-5 service-details-div" to={"/order/" + title}>
            <div className="d-flex   justify-content-center">
                <img className="w-25" src={`data:image/png;base64,${image.img}`} />
            </div>

            <h2 className="text-center   service-title">{title}</h2>
            <h4 className="service-description   text-center">{description}</h4>
        </Link>
    );
};

export default ServiceDetails;