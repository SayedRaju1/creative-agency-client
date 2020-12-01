import React from 'react';
import './MainHeader.css'
import frame from '../../../../images/logos/Frame.png'
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div className=" row pt-md-3  main-header-container">
            <div className="col-md-5  pl-md-5">
                <div className=" header-big-small-text ml-md-5 p-lg-5  ">
                    <h1 className="">Let's Grow Your <br /> Brand To <br />The Next Level</h1>
                    <p className="lorem-header font-weight-normal pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet adipisci quaerat tempore numquam necessitatibus!</p>

                    <Link className=" text-decoration-none text-reset" to="/order/form"><p className="login-btn rounded-lg text-white d-flex justify-content-center text-center align-items-center">Hire Us</p></Link>
                </div>
            </div>
            <div className="col-md-7 ">
                <img className="w-75 " src={frame} alt="" />
            </div>
        </div>

    );
};

export default MainHeader;