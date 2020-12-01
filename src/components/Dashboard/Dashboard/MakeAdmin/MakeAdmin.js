import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory()

    const onSubmit = data => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin Added')
                }
            })
    };
    return (
        <div className="row p-0 m-0 container-fluid makeAdmin-container">

            <Sidebar></Sidebar>

            <div className="col-md-10 p-0 m-0">
                <div className="bg-white p-md-3 pt-md-3 d-flex justify-content-between">
                    <h4 className="p-3">Make Admin</h4>
                    <h4 className="p-3">{loggedInUser.name}</h4>
                </div>
                <div className="bg-white admin-form rounded-lg m-md-5 mx-3 px-3">
                    <p>Email</p>
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control p-2 m-2 col-md-6 email-input form-control-lg" name="email" id="admin" placeholder="jon@gamil.com" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>Email is required</span>}

                        <input className="btn bg-success col-md-1 p-2 m-2 text-white" type="submit" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default MakeAdmin;