import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);


    return (
        <div>
            <div className="pt-5">
                <h1 className="text-center section-header">Provide awesome <span className="services-span">services</span></h1>
            </div>
            <div className="row d-flex justify-content-center p-3">
                {
                    services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>

        </div>
    );
};

export default Services;