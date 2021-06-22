import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <HomeNavbar></HomeNavbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;