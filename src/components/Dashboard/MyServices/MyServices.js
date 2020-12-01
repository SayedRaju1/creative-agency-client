import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import MyServiceDetails from '../MyServiceDetails/MyServiceDetails';
import Sidebar from '../Sidebar/Sidebar';
import './MyServices.css'

const MyServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [myServices, setMyServices] = useState([]);

    useEffect(() => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/myServices')
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, []);

    const myServicesFiltered = myServices.filter(service => service.email === loggedInUser.email);

    return (
        <div className="row p-0 myService-container border">

            <Sidebar></Sidebar>

            <div className="col-md-10 p-0 m-0">
                <div className="bg-white p-md-3 pt-md-3 d-flex justify-content-between">
                    <h4 className="p-3">My Services</h4>
                    <h4 className="p-3">{loggedInUser.name}</h4>
                </div>
                <div className="p-5 d-flex justify-content-center row mt-5 rounded-lg">
                    {
                        myServicesFiltered.map(myService => <MyServiceDetails myService={myService}></MyServiceDetails>)
                    }
                </div>

            </div>

        </div>
    );
};

export default MyServices;