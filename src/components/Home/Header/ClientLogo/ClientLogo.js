import React from 'react';
import './ClientLogo.css';
import slack from '../../../../images/logos/slack.png'
import airbnb from '../../../../images/logos/airbnb.png'
import google from '../../../../images/logos/google.png'
import netflix from '../../../../images/logos/netflix.png'
import uber from '../../../../images/logos/uber.png'

const ClientLogo = () => {
    return (
        <div className=" d-flex row justify-content-center m-5  p-md-5 align-items-center">
            <div className="col-md-2 col-4  client-logo-div   d-flex  justify-content-center">
                <img src={slack} alt="" className="client-logo" />
            </div>
            <div className="col-md-2 col-4 client-logo-div  d-flex justify-content-center">
                <img src={google} alt="" className="client-logo" />
            </div>
            <div className="col-md-2 col-4 client-logo-div  d-flex justify-content-center">
                <img src={uber} alt="" className="client-logo" />
            </div>
            <div className="col-md-2 col-4 client-logo-div  d-flex justify-content-center">
                <img src={netflix} alt="" className="client-logo" />
            </div>
            <div className="col-md-2 col-4 client-logo-div  d-flex justify-content-center">
                <img src={airbnb} alt="" className="client-logo" />
            </div>
        </div>
    );
};

export default ClientLogo;