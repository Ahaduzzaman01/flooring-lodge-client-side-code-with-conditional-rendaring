import React from 'react';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;