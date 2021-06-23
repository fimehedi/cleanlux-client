import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <Navbar />
            <HeaderMain />
        </header>
    );
};

export default Header;