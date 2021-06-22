import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import BookingDetail from '../BookingDetail/BookingDetail';
import { userContext } from '../../../App';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://infinite-waters-92433.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    })

    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>
                <div className="p-5 pt-0">
                    <h4 className="mt-4">Hello <span className="user-name" style={{ color: '#12a56a' }}>{loggedInUser.displayName}</span>, your booking list.</h4>
                    <div className="row">
                        {
                            bookings.map(order => <BookingDetail order={order}></BookingDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;