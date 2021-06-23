import React from 'react';

const NotFound = ({ code, msg }) => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100 h-100 text-danger text-center">
            <div>
                <h1>{code}</h1>
                <h3>{msg}</h3>
            </div>
        </div>
    );
};

export default NotFound;