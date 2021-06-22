import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import './Book.css'

const Book = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { displayName, email } = loggedInUser;
    const [clickedService, setClickedService] = useState([]);
    const { charge, description, iconURL, name } = clickedService;

    useEffect(() => {
        const url = `https://infinite-waters-92433.herokuapp.com/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClickedService(data[0]));
    }, [])


    const handleOrder = () => {
        const newOrder = { displayName, email, charge, description, iconURL, name, status: 'Pending' };
        fetch('https://infinite-waters-92433.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>
                <div className='booking w-100 p-4'>
                    <form>
                        <input type="text" value={displayName} className="form-control m-2 w-50" />
                        <input type="text" value={email} className="form-control m-2 w-50" />
                        <input type="text" value={name} className="form-control m-2 w-50" />
                    </form>
                    <ProcessPayment></ProcessPayment>
                    <h6>Your service charge will be <strong>${charge}</strong> <button className="btn btn-success" onClick={handleOrder}>Pay</button></h6>
                </div>
            </div>
        </div>
    );
};

export default Book;