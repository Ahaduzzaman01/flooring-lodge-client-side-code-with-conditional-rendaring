import React from 'react';
import './BookingDetail.css'

const OrderDetail = props => {
    const { name, iconURL, description, status } = props.order;

    return (
        <div className="list-container col-md-5 p-4 m-3 shadow">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <img src={iconURL} alt="" />
                </div>
                <div>
                    <h6>{status}</h6>
                </div>
            </div>

            <div>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OrderDetail;