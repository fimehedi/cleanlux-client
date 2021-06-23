import React, { useContext } from 'react';
import cx from 'classnames';
import classes from './Navbar.module.css';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {

    const { loggedInUser } = useContext(UserContext);
    const history = useHistory();

    return (
        <nav className={cx(classes.navbarContainer, 'container navbar navbar-expand-lg navbar-light pt-3')}>
            <Link to="/" className="navbar-brand">
                <h2 className="font-weight-bold">
                    <span className="text-primary">CLEAN</span>
                    <span className="text-secondary">LUX</span>
                </h2>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link text-primary ml-3" to="/">Home</Link>
                    <a className="nav-link text-primary ml-3" href="/#feature">Feature</a>
                    <a className="nav-link text-primary ml-3" href="/#services">Services</a>
                    <a className="nav-link text-primary ml-3" href="/#testimonial">Testimonial</a>
                    <Link className="nav-link text-primary ml-3" to="/dashboard">Dashboard</Link>
                    {
                        loggedInUser.name
                            ?
                            <h6 className="nav-link text-primary ml-3">{loggedInUser.name}</h6>
                            :
                            <button onClick={() => history.push('/login')} className="ml-3 btn btn-primary" to="/login">Login</button>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;