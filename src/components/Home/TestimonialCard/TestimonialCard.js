import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ testimonial: { name, comment } }) => {
    return (
        <div className="col-md-4 text-center mb-5">
            <div className="border border-radius shadow px-4 py-3 testimonial-card">
                <div className="quoteContainer">
                    <FontAwesomeIcon className="icon" icon={faQuoteRight} />
                </div>

                <div className="pt-5">
                    <p className="text-secondary-alt">{comment}</p>
                    <h3 className="text-primary">{name}</h3>
                </div>

            </div>
        </div >
    );
};

export default TestimonialCard;