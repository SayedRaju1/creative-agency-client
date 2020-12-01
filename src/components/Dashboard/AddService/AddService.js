import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './AddService.css'

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://guarded-wildwood-19229.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service Added')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="add-container row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-0">
                <div className="bg-white p-md-3 pt-md-3  d-flex justify-content-between">
                    <h4 className="p-3">Add Service</h4>
                    <h4 className="p-3">{loggedInUser.name}</h4>
                </div>
                <div className="p-md-5 m-3 bg-white m-md-5 rounded-lg">
                    <form onSubmit={handleSubmit} className="row">
                        <div className=" col-md-6 p-3">
                            <label className="service-lable" for="title">Service Title</label>
                            <input onBlur={handleBlur} type="text" className="label-input border rounded-lg" name="title" id="title" placeholder="Enter Title" />
                        </div>
                        <div className="col-md-6 p-3">
                            <label className="service-lable" htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control-file pt-1" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <div className=" col-md-6 p-3">
                            <label className="description-lable" for="description">Description</label>
                            <input onBlur={handleBlur} type="text" className="description-input border rounded-lg" name="description" id="description" placeholder="Enter Description" />
                        </div>
                        <div className="p-3 mt-md-5 d-flex align-items-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddService;