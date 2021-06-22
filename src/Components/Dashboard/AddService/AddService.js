import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [iconURL, setIconURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const serviceData = {
            name: data.service,
            charge: data.charge,
            description: data.description,
            iconURL: iconURL
        };
        const url = `https://infinite-waters-92433.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    alert("A service has been successfully added.")
                }
            });
    };

    const handleIconUpload = service => {
        const iconData = new FormData();
        iconData.set('key', '7ecebd31fe0780e2c3ecdfe9ad94a3fb');
        iconData.append('image', service.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            iconData)
            .then(function (response) {
                setIconURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }

    return (
        <div className="">
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>

                <div className="add-service-container w-100 p-4">
                    <div className="form-container w-100 bg-white p-4">
                        <div className="form-wrapper">
                            <h4 className="ms-2">Add Service</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-text-wrapper d-flex">
                                    <div className="p-4 w-50">
                                        <label className="h6" htmlFor="service">Service Name</label>
                                        <br />
                                        <input className="w-100 mb-2 form-control" placeholder="Service Name" {...register("service")} required />
                                        <br />
                                        <label className="h6" htmlFor="charge">Service Charge</label>
                                        <br />
                                        <input className="w-100 mb-2 form-control" placeholder="Service Charge" {...register("charge")} required />
                                        <br />
                                    </div>
                                    <div className="p-4 w-50">
                                        <label className="h6" htmlFor="description">Add Description</label>
                                        <br />
                                        <textarea className="form-control" cols="30" rows="5" placeholder="Description" {...register("description")} required></textarea>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <label className="h6" htmlFor="icon">Add Icon</label>
                                    <br />
                                    <input type="file" onChange={handleIconUpload} required />
                                    <br />
                                    <input className="add-service-btn mt-4" type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;