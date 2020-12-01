import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css'


const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);


    useEffect(() => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/myServices')
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, []);
    // console.log(serviceList);

    const renderServiceList = (service, index) => {
        return (
            <tr key={index}>
                <td>{service.name}</td>
                <td>{service.email}</td>
                <td>{service.serviceTitle}</td>
                <td>{service.description}</td>
            </tr>
        )

    }
    return (
        <div className="row serviceList-container">

            <Sidebar></Sidebar>

            <div className="col-md-10 p-0">
                <div className="bg-white p-md-3 pt-md-3  d-flex justify-content-between">
                    <h4 className="p-3">Service List</h4>
                    <h4 className="p-3">{loggedInUser.name}</h4>
                </div>
                <div className="bg-white rounded-lg m-md-5  p-md-5">
                    <Table class="table table-borderless hover m-3 responsive-sm">
                        <thead className="table-header">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceList.map(renderServiceList)
                            }
                        </tbody>
                    </Table>
                </div>

            </div>

        </div>
    );
};

export default ServiceList;