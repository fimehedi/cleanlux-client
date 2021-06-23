import React, { useContext } from 'react';
import { facebookLogin, googleLogin } from '../Authentication/AuthManager';
import googleIcon from './google.png';
import facebookIcon from './facebook.png';
import classes from './SocialAuth.module.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { UserContext } from '../../../App';

const SocialAuth = () => {

    const { setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                if (res.errorCode) {
                    alert(res.errorMsg)
                }
                else {
                    setLoggedInUser(res);
                    history.replace(from);
                }
            })
    }

    const handleFbLogin = () => {
        facebookLogin()
            .then(res => {
                if (res.errorCode) {
                    alert(res.errorMsg)
                }
                else {
                    setLoggedInUser(res);
                    history.replace(from);
                }

            })
    }

    return (
        <section className={classNames(classes.loginContainer, "d-flex")}>
            <Link to="/">
                <h1 className="font-weight-bold pb-5 mb-5">
                    <span className="text-primary">CLEAN</span>
                    <span className="text-secondary">LUX</span>
                </h1>
            </Link>
            <h4 className="text-primary mb-3 text-center">Login With</h4>
            <button
                onClick={handleGoogleLogin}
                className={classNames(classes.socialOption, "btn border")}>
                <img src={googleIcon} alt="" />
                <p className="m-0">Continue with Google</p>
            </button>
            <button
                onClick={handleFbLogin}
                className={classNames(classes.socialOption, "btn border mt-2")}>
                <img src={facebookIcon} alt="" />
                <p className="m-0">Continue with Google</p>
            </button>
        </section>
    );
};

export default SocialAuth;