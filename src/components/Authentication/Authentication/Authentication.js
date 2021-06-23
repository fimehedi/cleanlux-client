import React from 'react';
import './Authentication.css'
import SocialAuth from '../SocialAuth/SocialAuth';
import { initializeAuthApp } from './AuthManager';

initializeAuthApp();

const Authentication = () => {
    return (
        <div className="container">
            <SocialAuth />
        </div>
    );
};

export default Authentication;