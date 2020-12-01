import React from 'react';
import './FormHome.css'

const FormHome = () => {
    return (
        <div className="pt-5 form-home-container">
            <div >
                <div className="row mt-5 ">
                    <div className="col-md-5 offset-md-1">
                        <h4 className="p-5 home-form-header">Let us handle your <br /> project, professionally.</h4>
                        <h5 className="px-md-5 px-5 px-lg-5  home-form-details">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</h5>
                    </div>
                    <div className="col-md-6 mb-5 mt-5">
                        <input className=" email-name mb-3 rounded-lg" type="text" placeholder="Your email address" /><br />
                        <input className=" email-name mb-3 rounded-lg" type="text" placeholder="Your name / company’s name" /><br />
                        <textarea className=" message mb-2 rounded-lg" type="text" placeholder="Your message" /><br />
                        <p className="home-form-send text-center text-white rounded-lg d-flex justify-content-center align-items-center">Send</p>
                    </div>

                </div>

            </div>
            <div>
                <h5 className="text-center copyright p-5">copyright SayedRaju 2020</h5>
            </div>
        </div>
    );
};

export default FormHome;