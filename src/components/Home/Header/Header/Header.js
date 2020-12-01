import React from 'react';
import ClientLogo from '../ClientLogo/ClientLogo';
import MainHeader from '../MainHeader/MainHeader';
import NavPage from '../NavPage/NavPage';



import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <NavPage></NavPage>
            <MainHeader ></MainHeader>

        </div>
    );
};

export default Header;