import React, { useEffect, useState } from 'react';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css'

const ManageServices = () => {
    const [serviceDetail, setServiceDetail] = useState([]);

    useEffect(() => {
        fetch('https://infinite-waters-92433.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])

    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>


                <div className="w-100 manage-table-container p-4">
                    <div className="w-75 bg-white p-4 manage-table-wrapper">
                        <h4>Manage Service</h4>
                        <div className="text-center">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-start" scope="col">Service Name</th>
                                        <th scope="col">Service Charge</th>
                                        <th scope="col">Manage Service</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        serviceDetail.map(service => <ManageServiceCard service={service}></ManageServiceCard>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;