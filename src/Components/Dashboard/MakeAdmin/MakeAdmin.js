import React from 'react';
import { useForm } from "react-hook-form";
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminData = {
            email: data.email
        };
        const url = `https://infinite-waters-92433.herokuapp.com/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                if (res) {
                    alert("An admin has successfully added to the database.")
                }
            });
    };

    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>
                <div className='w-100 p-4 make-admin-form-container'>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-50 bg-white p-3 admin-input-wrapper">
                                <label className="h5" htmlFor="email">Email</label>
                                <br />
                                <input className="w-100 mb-2 form-control" placeholder="example@gmail.com" required {...register('email')} />
                                <input className="make-admin-btn mt-4" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;