import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { iconURL, name, charge, description, _id } = props.service;
    const history = useHistory();

    const goToBook = id => {
        const url = `book/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 col-sm-6 detail-card service-card shadow mx-4 p-3 bg-white" onClick={() => goToBook(_id)}>
            <div className="icon-box mb-3">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={iconURL} />
                        </div>
                        <div className="flip-card-back">
                            <img src={iconURL} />
                        </div>
                    </div>
                </div>

            </div>
            <h5>{name}</h5>
            <h6 style={{ color: '#1a9664' }}>${charge}</h6>
            <small>{description}</small>
        </div>
    );
};

export default ServiceDetails;