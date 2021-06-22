import React from 'react';
import AnotherNavBar from '../AnotherNavBar/AnotherNavBar';

const NotFound = () => {
    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className="d-flex justify-content-center align-items-center text-danger" style={{ height: "80vh" }}>
                <h1>Oops.. Page Not Found!!!</h1>
            </div>
        </div>
    );
};

export default NotFound;