import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo2.png';

const HomeNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
console.log(loggedInUser);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid container">
                <Link className="navbar-brand logo" to="/"><img style={{ height: "55px" }} src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                        {
                            loggedInUser.displayName ? <p className="mt-2">{loggedInUser.displayName}</p> : <Link className="nav-link ms-4" to="/login">Login</Link>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;