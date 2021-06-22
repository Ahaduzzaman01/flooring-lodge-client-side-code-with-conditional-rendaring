import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';
import logo from '../../../images/logo1.png';
import { userContext } from '../../../App';

const HomeNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid container">
                <Link className="navbar-brand text-white logo" to="/"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                        {
                            loggedInUser.displayName ? <p className="mt-2 text-white">{loggedInUser.displayName}</p> : <Link className="nav-link ms-4 text-white" to="/login">Login</Link>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;