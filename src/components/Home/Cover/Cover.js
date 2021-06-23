import React from 'react';
import './Cover.css';

const Cover = () => {
    return (
        <section className="cover-section">
            <div className="d-flex justify-content-center align-items-center h-100 flex-column heading">
                <h1>Better Service</h1>
                <h1>Better Experience</h1>
                <a href="/#services" className="btn btn-primary btn-lg mt-3">Booking Now</a>
            </div>

        </section>
    );
};

export default Cover;