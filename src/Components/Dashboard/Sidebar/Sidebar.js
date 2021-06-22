import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListUl, faCommentAlt, faPlus, faUserPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://infinite-waters-92433.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);


    return (
        <div className="sidebar">
            <ul className="list-unstyled mb-0">
                <li>
                    <Link style={{ textDecoration: "none" }} to="/book" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>

                <li>
                    <Link style={{ textDecoration: "none" }} to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faListUl} /> <span>Booking List</span>
                    </Link>
                </li>

                <li>
                    <Link style={{ textDecoration: "none" }} to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>

                {isAdmin && <div>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faListUl} /> <span>Order List</span>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: "none" }} to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: "none" }} to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: "none" }} to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;